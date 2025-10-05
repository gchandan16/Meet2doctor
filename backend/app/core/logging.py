import logging
import sys
from logging.handlers import RotatingFileHandler

# Log format
LOG_FORMAT = "%(asctime)s - %(levelname)s - %(name)s - %(message)s"

# Global Logger
def setup_logger():
    logger = logging.getLogger("meet2doctor_backend")
    logger.setLevel(logging.DEBUG)  # Can be INFO in production

    # Console handler
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(logging.INFO)
    console_handler.setFormatter(logging.Formatter(LOG_FORMAT))

    # File handler (rotating logs, max 5MB, 5 backups)
    file_handler = RotatingFileHandler("logs/app.log", maxBytes=5*1024*1024, backupCount=5)
    file_handler.setLevel(logging.DEBUG)
    file_handler.setFormatter(logging.Formatter(LOG_FORMAT))

    # Avoid duplicate handlers
    if not logger.handlers:
        logger.addHandler(console_handler)
        logger.addHandler(file_handler)

    return logger

# Export global logger
logger = setup_logger()
