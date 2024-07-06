const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');
const Car = require('../src/models/car');
const Client = require('../src/models/Client');
const Rental = require('../src/models/Rental');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Rental c/ API', () => {
    let car, client;

    beforeEach(async () => {
        await Car.deleteMany({});
        await Client.deleteMany({});
        await Rental.deleteMany({});

        car = new Car({ fabricante: 'Chevrolet', modelo: 'Celta', ano: 2011, taxaAluguel: 200 });
        await car.save();

        client = new Client({ nome: 'João da Silva', email: 'joao.silva@gmail.com', telefone: '11944657933' });
        await client.save();
    });

    describe('POST /api/rentals', () => {
        it('Você deve criar um novo aluguel para seguir', (done) => {
            const rental = {
                car: car._id,
                client: client._id,
                rentalDate: new Date(),
                returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Uma semana depois
                totalCost: 700
            };
            chai.request(app)
                .post('/api/rentals')
                .send(rental)
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('objeto');
                    expect(res.body).to.have.property('car').eql(car._id.toString());
                    expect(res.body).to.have.property('client').eql(client._id.toString());
                    expect(res.body).to.have.property('totalCost', 700);
                    done();
                });
        });
    });
});
