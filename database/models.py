# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 14, 2024 15:39:17
# Database: sqlite:////tmp/tmp.UBIuRBGpbE-01JCNN72G7WT5SC89W5BVM4FDA/MultiTenantAWSConfig/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Tenant(SAFRSBaseX, Base):
    """
    description: Represents a tenant in the system.
    """
    __tablename__ = 'tenants'
    _s_collection_name = 'Tenant'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    ContainerList : Mapped[List["Container"]] = relationship(back_populates="tenant")
    DatabaseList : Mapped[List["Database"]] = relationship(back_populates="tenant")
    S3BucketList : Mapped[List["S3Bucket"]] = relationship(back_populates="tenant")
    SecurityIncidentList : Mapped[List["SecurityIncident"]] = relationship(back_populates="tenant")
    UserList : Mapped[List["User"]] = relationship(back_populates="tenant")



class Container(SAFRSBaseX, Base):
    """
    description: Represents a container tracked in the AWS system.
    """
    __tablename__ = 'containers'
    _s_collection_name = 'Container'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    tenant_id = Column(ForeignKey('tenants.id'), nullable=False)
    name = Column(String, nullable=False)
    status = Column(String)

    # parent relationships (access parent)
    tenant : Mapped["Tenant"] = relationship(back_populates=("ContainerList"))

    # child relationships (access children)
    ContainerLogList : Mapped[List["ContainerLog"]] = relationship(back_populates="container")
    UserContainerAccessList : Mapped[List["UserContainerAccess"]] = relationship(back_populates="container")



class Database(SAFRSBaseX, Base):
    """
    description: Represents a database managed by the application.
    """
    __tablename__ = 'databases'
    _s_collection_name = 'Database'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    tenant_id = Column(ForeignKey('tenants.id'), nullable=False)
    name = Column(String, nullable=False)
    engine = Column(String)
    version = Column(String)

    # parent relationships (access parent)
    tenant : Mapped["Tenant"] = relationship(back_populates=("DatabaseList"))

    # child relationships (access children)
    DatabaseEventList : Mapped[List["DatabaseEvent"]] = relationship(back_populates="database")
    UserDatabaseAccessList : Mapped[List["UserDatabaseAccess"]] = relationship(back_populates="database")



class S3Bucket(SAFRSBaseX, Base):
    """
    description: Represents an S3 bucket owned by a tenant.
    """
    __tablename__ = 's3_buckets'
    _s_collection_name = 'S3Bucket'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    tenant_id = Column(ForeignKey('tenants.id'), nullable=False)
    name = Column(String, nullable=False)
    region = Column(String)

    # parent relationships (access parent)
    tenant : Mapped["Tenant"] = relationship(back_populates=("S3BucketList"))

    # child relationships (access children)
    S3BucketEventList : Mapped[List["S3BucketEvent"]] = relationship(back_populates="s3_bucket")
    UserS3BucketAccessList : Mapped[List["UserS3BucketAccess"]] = relationship(back_populates="s3_bucket")



class SecurityIncident(SAFRSBaseX, Base):
    """
    description: Logs security incidents related to any component.
    """
    __tablename__ = 'security_incidents'
    _s_collection_name = 'SecurityIncident'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    tenant_id = Column(ForeignKey('tenants.id'), nullable=False)
    timestamp = Column(DateTime, nullable=False)
    details = Column(String, nullable=False)

    # parent relationships (access parent)
    tenant : Mapped["Tenant"] = relationship(back_populates=("SecurityIncidentList"))

    # child relationships (access children)



class User(SAFRSBaseX, Base):
    """
    description: Represents a user associated with a tenant.
    """
    __tablename__ = 'users'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    tenant_id = Column(ForeignKey('tenants.id'), nullable=False)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)

    # parent relationships (access parent)
    tenant : Mapped["Tenant"] = relationship(back_populates=("UserList"))

    # child relationships (access children)
    UserContainerAccessList : Mapped[List["UserContainerAccess"]] = relationship(back_populates="user")
    UserDatabaseAccessList : Mapped[List["UserDatabaseAccess"]] = relationship(back_populates="user")
    UserS3BucketAccessList : Mapped[List["UserS3BucketAccess"]] = relationship(back_populates="user")



class ContainerLog(SAFRSBaseX, Base):
    """
    description: Tracks logs/events from containers.
    """
    __tablename__ = 'container_logs'
    _s_collection_name = 'ContainerLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    container_id = Column(ForeignKey('containers.id'), nullable=False)
    timestamp = Column(DateTime, nullable=False)
    message = Column(String, nullable=False)

    # parent relationships (access parent)
    container : Mapped["Container"] = relationship(back_populates=("ContainerLogList"))

    # child relationships (access children)



class DatabaseEvent(SAFRSBaseX, Base):
    """
    description: Represents an event or change in the database.
    """
    __tablename__ = 'database_events'
    _s_collection_name = 'DatabaseEvent'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    database_id = Column(ForeignKey('databases.id'), nullable=False)
    event_time = Column(DateTime, nullable=False)
    details = Column(String, nullable=False)

    # parent relationships (access parent)
    database : Mapped["Database"] = relationship(back_populates=("DatabaseEventList"))

    # child relationships (access children)



class S3BucketEvent(SAFRSBaseX, Base):
    """
    description: Represents an event occurring in an S3 bucket.
    """
    __tablename__ = 's3_bucket_events'
    _s_collection_name = 'S3BucketEvent'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    s3_bucket_id = Column(ForeignKey('s3_buckets.id'), nullable=False)
    event_time = Column(DateTime, nullable=False)
    description = Column(String, nullable=False)

    # parent relationships (access parent)
    s3_bucket : Mapped["S3Bucket"] = relationship(back_populates=("S3BucketEventList"))

    # child relationships (access children)



class UserContainerAccess(SAFRSBaseX, Base):
    """
    description: Specifies which containers a user has access to.
    """
    __tablename__ = 'user_container_access'
    _s_collection_name = 'UserContainerAccess'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    container_id = Column(ForeignKey('containers.id'), nullable=False)

    # parent relationships (access parent)
    container : Mapped["Container"] = relationship(back_populates=("UserContainerAccessList"))
    user : Mapped["User"] = relationship(back_populates=("UserContainerAccessList"))

    # child relationships (access children)



class UserDatabaseAccess(SAFRSBaseX, Base):
    """
    description: Specifies which databases a user can access.
    """
    __tablename__ = 'user_database_access'
    _s_collection_name = 'UserDatabaseAccess'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    database_id = Column(ForeignKey('databases.id'), nullable=False)

    # parent relationships (access parent)
    database : Mapped["Database"] = relationship(back_populates=("UserDatabaseAccessList"))
    user : Mapped["User"] = relationship(back_populates=("UserDatabaseAccessList"))

    # child relationships (access children)



class UserS3BucketAccess(SAFRSBaseX, Base):
    """
    description: Specifies which S3 buckets a user can access.
    """
    __tablename__ = 'user_s3_bucket_access'
    _s_collection_name = 'UserS3BucketAccess'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    s3_bucket_id = Column(ForeignKey('s3_buckets.id'), nullable=False)

    # parent relationships (access parent)
    s3_bucket : Mapped["S3Bucket"] = relationship(back_populates=("UserS3BucketAccessList"))
    user : Mapped["User"] = relationship(back_populates=("UserS3BucketAccessList"))

    # child relationships (access children)
