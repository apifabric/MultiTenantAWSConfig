# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Tenant(Base):
    """description: Represents a tenant in the system."""
    __tablename__ = 'tenants'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)


class User(Base):
    """description: Represents a user associated with a tenant."""
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    tenant_id = Column(Integer, ForeignKey('tenants.id'), nullable=False)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)


class Container(Base):
    """description: Represents a container tracked in the AWS system."""
    __tablename__ = 'containers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    tenant_id = Column(Integer, ForeignKey('tenants.id'), nullable=False)
    name = Column(String, nullable=False)
    status = Column(String)  # e.g., 'running', 'stopped'


class Database(Base):
    """description: Represents a database managed by the application."""
    __tablename__ = 'databases'

    id = Column(Integer, primary_key=True, autoincrement=True)
    tenant_id = Column(Integer, ForeignKey('tenants.id'), nullable=False)
    name = Column(String, nullable=False)
    engine = Column(String)  # e.g., 'PostgreSQL', 'MySQL'
    version = Column(String)


class S3Bucket(Base):
    """description: Represents an S3 bucket owned by a tenant."""
    __tablename__ = 's3_buckets'

    id = Column(Integer, primary_key=True, autoincrement=True)
    tenant_id = Column(Integer, ForeignKey('tenants.id'), nullable=False)
    name = Column(String, nullable=False)
    region = Column(String)


class UserContainerAccess(Base):
    """description: Specifies which containers a user has access to."""
    __tablename__ = 'user_container_access'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    container_id = Column(Integer, ForeignKey('containers.id'), nullable=False)


class UserDatabaseAccess(Base):
    """description: Specifies which databases a user can access."""
    __tablename__ = 'user_database_access'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    database_id = Column(Integer, ForeignKey('databases.id'), nullable=False)


class UserS3BucketAccess(Base):
    """description: Specifies which S3 buckets a user can access."""
    __tablename__ = 'user_s3_bucket_access'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    s3_bucket_id = Column(Integer, ForeignKey('s3_buckets.id'), nullable=False)


class ContainerLog(Base):
    """description: Tracks logs/events from containers."""
    __tablename__ = 'container_logs'

    id = Column(Integer, primary_key=True, autoincrement=True)
    container_id = Column(Integer, ForeignKey('containers.id'), nullable=False)
    timestamp = Column(DateTime, nullable=False)
    message = Column(String, nullable=False)


class DatabaseEvent(Base):
    """description: Represents an event or change in the database."""
    __tablename__ = 'database_events'

    id = Column(Integer, primary_key=True, autoincrement=True)
    database_id = Column(Integer, ForeignKey('databases.id'), nullable=False)
    event_time = Column(DateTime, nullable=False)
    details = Column(String, nullable=False)


class S3BucketEvent(Base):
    """description: Represents an event occurring in an S3 bucket."""
    __tablename__ = 's3_bucket_events'

    id = Column(Integer, primary_key=True, autoincrement=True)
    s3_bucket_id = Column(Integer, ForeignKey('s3_buckets.id'), nullable=False)
    event_time = Column(DateTime, nullable=False)
    description = Column(String, nullable=False)


class SecurityIncident(Base):
    """description: Logs security incidents related to any component."""
    __tablename__ = 'security_incidents'

    id = Column(Integer, primary_key=True, autoincrement=True)
    tenant_id = Column(Integer, ForeignKey('tenants.id'), nullable=False)
    timestamp = Column(DateTime, nullable=False)
    details = Column(String, nullable=False)


# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

# Creating test data

from datetime import date

# Tenants
tenant1 = Tenant(name="Alpha Tech")
tenant2 = Tenant(name="Beta Corp")
tenant3 = Tenant(name="Gamma Ltd")
tenant4 = Tenant(name="Delta Inc")

# Users
user1 = User(tenant_id=1, username="alice", email="alice@alphatech.com")
user2 = User(tenant_id=2, username="bob", email="bob@betacorp.com")
user3 = User(tenant_id=3, username="charlie", email="charlie@gammaltd.com")
user4 = User(tenant_id=4, username="david", email="david@deltainc.com")

# Containers
container1 = Container(tenant_id=1, name="Container A", status="running")
container2 = Container(tenant_id=2, name="Container B", status="stopped")
container3 = Container(tenant_id=3, name="Container C", status="running")
container4 = Container(tenant_id=4, name="Container D", status="stopped")

# Databases
database1 = Database(tenant_id=1, name="DB Alpha", engine="PostgreSQL", version="13")
database2 = Database(tenant_id=2, name="DB Beta", engine="MySQL", version="5.7")
database3 = Database(tenant_id=3, name="DB Gamma", engine="SQLite", version="3.32")
database4 = Database(tenant_id=4, name="DB Delta", engine="Oracle", version="19c")

# S3 Buckets
s3_bucket1 = S3Bucket(tenant_id=1, name="alpha-bucket", region="us-west-1")
s3_bucket2 = S3Bucket(tenant_id=2, name="beta-bucket", region="eu-central-1")
s3_bucket3 = S3Bucket(tenant_id=3, name="gamma-bucket", region="ap-southeast-1")
s3_bucket4 = S3Bucket(tenant_id=4, name="delta-bucket", region="us-east-1")

# User Container Access
user_container_access1 = UserContainerAccess(user_id=1, container_id=1)
user_container_access2 = UserContainerAccess(user_id=2, container_id=2)
user_container_access3 = UserContainerAccess(user_id=3, container_id=3)
user_container_access4 = UserContainerAccess(user_id=4, container_id=4)

# User Database Access
user_database_access1 = UserDatabaseAccess(user_id=1, database_id=1)
user_database_access2 = UserDatabaseAccess(user_id=2, database_id=2)
user_database_access3 = UserDatabaseAccess(user_id=3, database_id=3)
user_database_access4 = UserDatabaseAccess(user_id=4, database_id=4)

# User S3 Bucket Access
user_s3_bucket_access1 = UserS3BucketAccess(user_id=1, s3_bucket_id=1)
user_s3_bucket_access2 = UserS3BucketAccess(user_id=2, s3_bucket_id=2)
user_s3_bucket_access3 = UserS3BucketAccess(user_id=3, s3_bucket_id=3)
user_s3_bucket_access4 = UserS3BucketAccess(user_id=4, s3_bucket_id=4)

# Container Logs
container_log1 = ContainerLog(container_id=1, timestamp=date(2023, 10, 1), message="Container started successfully.")
container_log2 = ContainerLog(container_id=2, timestamp=date(2023, 10, 2), message="Container stopped unexpectedly.")
container_log3 = ContainerLog(container_id=3, timestamp=date(2023, 10, 3), message="New deployment initiated.")
container_log4 = ContainerLog(container_id=4, timestamp=date(2023, 10, 4), message="Maintenance mode enabled.")

# Database Events
database_event1 = DatabaseEvent(database_id=1, event_time=date(2023, 10, 1), details="Backup completed.")
database_event2 = DatabaseEvent(database_id=2, event_time=date(2023, 10, 2), details="Schema updated.")
database_event3 = DatabaseEvent(database_id=3, event_time=date(2023, 10, 3), details="New user role created.")
database_event4 = DatabaseEvent(database_id=4, event_time=date(2023, 10, 4), details="Data import completed.")

# S3 Bucket Events
s3_bucket_event1 = S3BucketEvent(s3_bucket_id=1, event_time=date(2023, 10, 1), description="Bucket policy updated.")
s3_bucket_event2 = S3BucketEvent(s3_bucket_id=2, event_time=date(2023, 10, 2), description="Objects archived.")
s3_bucket_event3 = S3BucketEvent(s3_bucket_id=3, event_time=date(2023, 10, 3), description="New object uploaded.")
s3_bucket_event4 = S3BucketEvent(s3_bucket_id=4, event_time=date(2023, 10, 4), description="Bucket tags modified.")

# Security Incidents
security_incident1 = SecurityIncident(tenant_id=1, timestamp=date(2023, 10, 1), details="Unauthorized access attempt detected.")
security_incident2 = SecurityIncident(tenant_id=2, timestamp=date(2023, 10, 2), details="Malware scan initiated.")
security_incident3 = SecurityIncident(tenant_id=3, timestamp=date(2023, 10, 3), details="Data breach risk assessed.")
security_incident4 = SecurityIncident(tenant_id=4, timestamp=date(2023, 10, 4), details="Compliance audit performed.")


session.add_all([tenant1, tenant2, tenant3, tenant4, user1, user2, user3, user4, container1, container2, container3, container4, database1, database2, database3, database4, s3_bucket1, s3_bucket2, s3_bucket3, s3_bucket4, user_container_access1, user_container_access2, user_container_access3, user_container_access4, user_database_access1, user_database_access2, user_database_access3, user_database_access4, user_s3_bucket_access1, user_s3_bucket_access2, user_s3_bucket_access3, user_s3_bucket_access4, container_log1, container_log2, container_log3, container_log4, database_event1, database_event2, database_event3, database_event4, s3_bucket_event1, s3_bucket_event2, s3_bucket_event3, s3_bucket_event4, security_incident1, security_incident2, security_incident3, security_incident4])
session.commit()
