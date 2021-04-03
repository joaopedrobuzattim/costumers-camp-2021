import { pool as database } from '../../database';
import { QueryResult } from 'pg';

interface body {
    first_name: string,
    last_name: string,
    email?: string,
    address: string,
    cpf: string
}


type tupdateBody = { [key: string] : string }

interface updateBody {
    first_name?: string,
    last_name?: string,
    email?: string,
    address?: string,
    cpf?: string
}

interface modelInterface {

    getAll: () =>  Promise<QueryResult>;
    getOne: ( id: string ) =>  Promise<QueryResult>;
    createOne: (body: body ) => Promise<QueryResult>;
    updateOne: (id: string, body: tupdateBody) => Promise<QueryResult>[];
    deleteOne: ( id: string ) =>  Promise<QueryResult>;
}

export class costumerModel implements modelInterface  {

    getAll(){

        const costumers = database.query('SELECT * FROM costumers');
        return costumers;

    }

     getOne( id: string ){
        const costumer = database.query('SELECT * FROM costumers WHERE id = $1', [id]);
        return costumer;
    }
    
    createOne( body: body ){
        const { first_name, last_name, email, address, cpf  } = body;

        const costumer = database.query('INSERT INTO costumers (first_name, last_name, email, address, cpf) VALUES ($1, $2, $3, $4, $5)',[
            first_name, 
            last_name, 
            email, 
            address, 
            cpf
        ])

        return costumer;

    }
    
    updateOne(id: string, body: tupdateBody){

        const queryArray = [];

        for(let key in body){
            queryArray.push(database.query(`UPDATE costumers SET ${key} = $1 WHERE id = $2`, [ body[key], id ]));
        }

        return queryArray;
    }

    deleteOne(id: string){
        const costumers = database.query('DELETE FROM costumers WHERE id = $1', [ id ]);
        return costumers;
    }




}