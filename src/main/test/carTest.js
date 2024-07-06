const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app'); 
const Car = require('../src/models/car');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Car com API', () => {
    beforeEach(async () => {
        await Car.deleteMany({});
    });

    describe('POST /api/cars', () => {
        it('Você deve criar um novo carro para seguir', (done) => {
            const car = {
                fabricante: 'Chevrolet',
                modelo: 'Celta',
                ano: 2011,
                taxaAluguel: 200
            };
            chai.request(app)
                .post('/api/cars')
                .send(car)
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('objeto');
                    expect(res.body).to.have.property('fabricante', 'Chevrolet');
                    expect(res.body).to.have.property('modelo', 'Celta');
                    expect(res.body).to.have.property('ano', 2011);
                    expect(res.body).to.have.property('taxaAluguel', 200);
                    done();
                });
        });
    });
});
