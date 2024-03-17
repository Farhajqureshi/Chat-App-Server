import express from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import LocalStrategy from ("passport-local").Strategy;
require('dotenv').config();
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 4040;
app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(initialize());

