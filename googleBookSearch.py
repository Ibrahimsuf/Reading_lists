import requests
import json
import pandas as pd

def google_book_search(search_terms):
    url = 'https://www.googleapis.com/books/v1/volumes?q='
    response = requests.get(url+search_terms, verify = False)
    # load data using Python JSON module
    r = response.content
    data = json.loads(r)
    return data["items"]

print(google_book_search("Harry Potter"))


"""
with open("search_results.json", "w") as f:
    json.dump(book_search_respone.json(), f)

"""