{
 "cells": [
  {
   "cell_type": "markdown",
   "id": "7fae5bc5",
   "metadata": {},
   "source": [
    "Mongo DB Implementation"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 1,
   "id": "06cb0772",
   "metadata": {},
   "outputs": [],
   "source": [
    "import pandas\n",
    "import json\n",
    "import datetime\n",
    "from pymongo import MongoClient"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "id": "68757eb0",
   "metadata": {},
   "outputs": [],
   "source": [
    "# MongoDB Configuration\n",
    "Database_name ='fleximart'\n",
    "Collection_name ='products_catalog' \n",
    "Mongo_URI ='mongodb://localhost:27017/'"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "id": "f318e9e8",
   "metadata": {},
   "outputs": [],
   "source": [
    "# Connect to MongoDB\n",
    "client = MongoClient(Mongo_URI) \n",
    "db = client[Database_name]\n",
    "collection = db[Collection_name]"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "e444d8a4",
   "metadata": {},
   "outputs": [],
   "source": []
  },
  {
   "cell_type": "markdown",
   "id": "ee8d9078",
   "metadata": {},
   "source": [
    "Loading the data"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "c0a63ad3",
   "metadata": {},
   "outputs": [],
   "source": []
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "base",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.13.5"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 5
}
