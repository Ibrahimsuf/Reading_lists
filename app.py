from flask import Flask, render_template, request, redirect
from load_nytimes_data import print_ebook_fiction_data
import sqlite3
from googleBookSearch import google_book_search

conn = sqlite3.connect('books.db', check_same_thread=False)
c = conn.cursor()

c.execute('''
          CREATE TABLE IF NOT EXISTS birthdays
          ([id] INTEGER PRIMARY KEY, 
          [name] TEXT,
          [date] DATE)
          ''')                
conn.commit()




app = Flask(__name__)

@app.route("/", methods = ["GET", "POST"])

def index():
    if request.method == "POST":
        name = request.form.get("name")
        birthday = request.form.get("birthday")

        c.execute("""INSERT INTO birthdays (name, date)
                    VALUES (?, ?)""", (name, birthday),)
        conn.commit()
    
    
    entered_birthday_data = c.execute("SELECT id, name, strftime('%m/%d/%Y', date) FROM birthdays").fetchall()


    return render_template("bestsellers.html", book_data = print_ebook_fiction_data)

@app.route("/search", methods = ["GET", "POST"])
def search():
    return render_template("search.html")

 
@app.route("/search-results", methods = ["GET", 'POST'])
def search_results():
    search_term = request.get("search-term")
    print(search_term)

    search_results = google_book_search(search_term)
    return render_template("search_results.html", search_results = search_results)