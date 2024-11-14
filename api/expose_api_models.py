from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Container, method_decorators= method_decorators)
    api.expose_object(database.models.Tenant, method_decorators= method_decorators)
    api.expose_object(database.models.ContainerLog, method_decorators= method_decorators)
    api.expose_object(database.models.Database, method_decorators= method_decorators)
    api.expose_object(database.models.DatabaseEvent, method_decorators= method_decorators)
    api.expose_object(database.models.S3Bucket, method_decorators= method_decorators)
    api.expose_object(database.models.S3BucketEvent, method_decorators= method_decorators)
    api.expose_object(database.models.SecurityIncident, method_decorators= method_decorators)
    api.expose_object(database.models.User, method_decorators= method_decorators)
    api.expose_object(database.models.UserContainerAccess, method_decorators= method_decorators)
    api.expose_object(database.models.UserDatabaseAccess, method_decorators= method_decorators)
    api.expose_object(database.models.UserS3BucketAccess, method_decorators= method_decorators)
    return api
