const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app'); 
const Client = require('../src/models/Client');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Cliente com API', () => {
    beforeEach(async () => {
        await Client.deleteMany({});
    });

    describe('POST /api/clients', () => {
        it('Você deve criar um novo cliente para seguir', (done) => {
            const client = {
                nome: 'João da Silva',
                email: 'joao.silva@gmail.com',
                telefone: '11944657933'
            };
            chai.request(app)
                .post('/api/clients')
                .send(client)
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.be.an('objeto');
                    expect(res.body).to.have.property('nome', 'João da Silva');
                    expect(res.body).to.have.property('email', 'joao.silva@gmail.com');
                    expect(res.body).to.have.property('telefone', '11944657933');
                    done();
                });
        });
    });
});
