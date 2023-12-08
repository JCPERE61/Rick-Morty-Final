const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe("Test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => { 
            await agent.get("/rickandmorty/character/1").expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', () => {

            const { body } = await.agent.get("/rickandmorty/character/1");

            expect(body).toHaveProperty("id");
            expect(body).toHaveProperty("name");
            expect(body).toHaveProperty("species");
            expect(body).toHaveProperty("gender");
            expect(body).toHaveProperty("status");
            expect(body).toHaveProperty("origin");
            expect(body).toHaveProperty("image");
        });
        it('Si hay un error responde con status: 500', async () => {
            await agent.get("/rickandmorty/character/900").expect(500);
        })
    });

    describe("GET /rickandmorty/login", ()=> {
        it('Verificar que el user y el password son los correctos y colocar access en true', async () =>{
            const {body} = await agent.get('/rickandmorty/login?email=jcpere@gmail.com&password=Henry2023');

            expect(body).toEqual({access:true})
        });
        it('Verificar que si el user y/o el password no son los correctos, colocar access en false', async () =>{
            const {body} = await agent.get('/rickandmorty/login?email=jcpere@gmail.com&password=Henry');

            expect(body).toEqual({access:false})
        })    
    });
    describe("POST /rickandmorty/fav", () => {

        let char1 = {id:1, name:"Rick Sanchez"};
        let char2 = {id:2, name:"Morty Smith"};

        it('La información debe ser devuelta en un arreglo', async () => {
            const response = (await agent.post('/rickandmorty/fav')).send(char1);

            expect(response.body).toBeInstanceOf(Array);
            expect(response.body).toContainEqual(char1);

        })
        it('Al enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente', async () =>  {
            const response = await agent.post('/rickandmorty/fav').send(char2);

            expect(response.body).toContainEqual(char1);
            expect(response.body).toContainEqual(char2);
        })
    });
    describe( "DELETE /rickandmorty/fav/:id", () => {
        
        let char1 = {id:1, name:"Rick Sanchez"};
        let char2 = {id:2, name:"Morty Smith"};

        it('Debe devolver un arreglo con los elementos previos sin modificar en el caso de que no haya ningún personaje con el ID que se envía', async ()=>{

            const {body} = await agent.delete('/rickandmorty/fav/3');

            expect(body).toContainEqual(char1);
            expect(body).toContainEqual(char2);

        });

        it('Debe devolver un arreglo sin el elemento eliminado, en el caso de que haya el personaje con el ID que se envía', async ()=>{

            const {body} = await agent.delete('/rickandmorty/fav/1');

            expect(body).not.toContainEqual(char1);
            expect(body).toContainEqual(char2);

        })

    })

});

