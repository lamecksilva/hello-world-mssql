const express = require('express');
const Sequelize = require('sequelize');
const { STRING, INTEGER, Model } = Sequelize;

const app = express();
app.use(express.json());

const sequelize = new Sequelize(
	process.env.DATABASE_NAME || 'teste',
	process.env.DATABASE_USER || 'sa',
	process.env.DATABASE_PASSWORD || 'sudoCap2019@#',
	{
		host: process.env.DATABASE_HOST || 'localhost',
		dialect: 'mssql',
		port: process.env.DATABASE_PORT || '1433'
	}
);

sequelize
	.authenticate()
	.then(() => console.log('Connected'))
	.error(err => console.log(err));

const User = sequelize.define(
	'user',
	{
		firstName: {
			type: STRING,
			allowNull: false
		},
		age: {
			type: INTEGER,
			allowNull: false
		}
	},
	{
		sequelize
	}
);

User.sync({ force: true }).then(() => console.log('forçada'));

app.get('/', (req, res) =>
	res
		.status(200)
		.send('Hello from Hello World')
		.end()
);

app.post('/create', (req, res) => {
	User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(err => res.status(400).json(err));
});

app.get('/all', (req, res) =>
	User.findAll()
		.then(users => res.status(302).json(users))
		.catch(err => res.status(400).json(err))
);
const PORT = process.env.PORT || 9001;

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`));
