from flask import Flask, request
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify


from logging import basicConfig, getLogger, INFO

from pyqldbsamples.model.sample_data import print_result
from pyqldbsamples.connect_to_ledger import create_qldb_session

logger = getLogger(__name__)
basicConfig(level=INFO)

app = Flask(__name__)
api = Api(app)

CORS(app)

@app.route("/")
def hello():
    return jsonify({'text':'Hello World!'})



def scan_table(transaction_executor, table_name):

    logger.info('Scanning {}...'.format(table_name))
    query = 'SELECT * FROM {}'.format(table_name)
    return transaction_executor.execute_statement(query)


if __name__ == '__main__':

    try:
        with create_qldb_session() as session:
                cursor = session.execute_lambda(lambda executor: scan_table(executor, 'Person'),
                                                lambda retry_attempt: logger.info('Retrying due to OCC conflict...'))
                n = next(cursor).get('Id')
                m = next(cursor).get('Salvaconducto')
                l = next(cursor).get('Estado')
                print(n)                                
                print_result(cursor)
    except Exception:
        logger.exception('Unable to scan tables.')

        
class Datos(Resource):
    def get(self):
        return {n,m,l} 

api.add_resource(Datos, '/datos') # Route_1



if __name__ == '__main__':
   app.run(port=5002)
