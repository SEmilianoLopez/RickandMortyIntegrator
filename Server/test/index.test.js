const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character= {
    id: 923,
    name: 'Emi',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: {
        name: 'Earth (C-137)'
    },
    image: 'image.jpg'
};
describe("test de RUTAS", () =>{
    describe("GET /rickandmorty/character/:id", ()=>{
        it("Responde con status 200", async ()=>{
            await request.get('/rickandmorty/character/1').expect(200);
        });

        it("Responde un objeto con las propiedades: 'id', 'name','species', 'gender','status', 'origin', 'image'", async () => {
            const response = await request.get('/rickandmorty/character/1');
            for(const prop in character){

                expect(response.body[prop]).toHaveProperty(prop)
            };
        });
    
        it('Si hay un error responde con status: 500', async() =>{
            const response = await request.get('/rickandmorty/character/3209j');
            expect (response.statusCode).toBe(500);
        })
    });
    describe("GET /rickandmorty/login", () =>{
        const access = {access: true};

        it("Responde con un objeto con la propiedad access en true si la información del usuario es válida", async()=>{
            const response = await request.get("/rickandmorty/login? email=emilopez197@gmail.com&password=emiliano1");
            expect(response.body).toEqual(access);
        });

        it("Responde con un objeto con la propiedad access en false si la información del usuario no es válida", async()=>{
            const response = await request.get("/rickandmorty/login? email=emilopez197@gmail.com&password=emiliano1");
            access.access= false;
            expect(response.body).toEqual(access);
        });
    });

    describe( "POST /rickandmorty/fav", ()=>{
        it("Debe guardar el personaje en favoritos", async ()=>{
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character);
        });
        
        it("Debe agregar personajes a favoritos sin eliminar los existentes", async()=>{
            character.id = 1923;
            character.name = 'FT 41a';
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2);
        });

    });

    describe("DELETE /rickandmorty/fav:id", ()=>{
        it("Si el ID solicitado no existe, debería retornar un arreglo son todos los favoritos", async()=>{
            const response = await request.delete('/rickandmorty/fav/2');
            expect(response.body.length).toBe(2);
        });

        it("Si el ID enviado existe, deberia eliminarlo de favoritos", async()=>{
            const response = await request.delete('/rickandmorty/fav/1923');
            expect(response.body.length).toBe(1);
        });
    });
});