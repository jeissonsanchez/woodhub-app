
from datetime import datetime
from decimal import Decimal
from logging import basicConfig, getLogger, INFO

from amazon.ion.simple_types import IonPyBool, IonPyBytes, IonPyDecimal, IonPyDict, IonPyFloat, IonPyInt, IonPyList, \
    IonPyNull, IonPySymbol, IonPyText, IonPyTimestamp
from amazon.ion.simpleion import dumps, loads

logger = getLogger(__name__)
basicConfig(level=INFO)
IonValue = (IonPyBool, IonPyBytes, IonPyDecimal, IonPyDict, IonPyFloat, IonPyInt, IonPyList, IonPyNull, IonPySymbol,
            IonPyText, IonPyTimestamp)


class SampleData:
    """
    Sample domain objects for use throughout this tutorial.
    """


def convert_object_to_ion(py_object):

    ion_object = loads(dumps(py_object))
    return ion_object


def to_ion_struct(key, value):

    ion_struct = dict()
    ion_struct[key] = value
    return loads(str(ion_struct))


def get_document_ids(transaction_executor, table_name, field, value):

    query = "SELECT id FROM {} AS t BY id WHERE t.{} = '{}'".format(table_name, field, value)
    cursor = transaction_executor.execute_statement(query)
    list_of_ids = map(lambda table: table.get('id'), cursor)
    return list_of_ids


def get_document_ids_from_dml_results(result):

    ret_val = list(map(lambda x: x.get('documentId'), result))
    return ret_val


def print_result(cursor):

    result_counter = 0
    for row in cursor:
        # Each row would be in Ion format.
        logger.info(dumps(row, binary=False, indent='  ', omit_version_marker=True))
        result_counter += 1
    return result_counter
