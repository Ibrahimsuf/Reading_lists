import json

with open("nytimes_data.json") as f:
    best_sellers = json.load(f)


print_ebook_fiction_data = best_sellers["results"]["lists"][0]["books"]


for book in print_ebook_fiction_data:
    print(book["title"], book["author"])