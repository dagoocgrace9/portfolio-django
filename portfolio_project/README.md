# Personal Portfolio Website — Django

A personal portfolio website built with Django. All content is hardcoded
directly in the HTML templates — no database or admin panel required.

**Live Site:** https://firstname_lastname.pythonanywhere.com  
**GitHub:** https://github.com/yourusername/portfolio

---

## Features

- Home page with name, tagline, and avatar
- About page with personal bio and career goals
- Skills page with animated progress bars
- Projects showcase (4 projects)
- Education timeline
- Contact page with social links
- Fully responsive design (mobile-friendly)
- No database — content lives in templates

---

## Tech Stack

- Python 3.x / Django 4.2
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Playfair Display, DM Sans, DM Mono)
- PythonAnywhere (hosting)
- Git & GitHub

---

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS / Linux

# 3. Install Django
pip install -r requirements.txt

# 4. Collect static files
python manage.py collectstatic

# 5. Run the development server
python manage.py runserver
```

Open http://127.0.0.1:8000 in your browser.

---

## Customizing Your Content

Since all content is hardcoded, edit the HTML files directly:

| What to change | File to edit |
|---|---|
| Name, tagline, avatar letter | `portfolio/templates/portfolio/home.html` |
| Bio, career goals, social links | `portfolio/templates/portfolio/about.html` |
| Skills and proficiency % | `portfolio/templates/portfolio/skills.html` |
| Projects (title, desc, links) | `portfolio/templates/portfolio/projects.html` |
| Education history | `portfolio/templates/portfolio/education.html` |
| Contact info | `portfolio/templates/portfolio/contact.html` |
| Nav initials, footer email | `portfolio/templates/portfolio/base.html` |

---

## Deploy to PythonAnywhere

### 1. Create account
Sign up at pythonanywhere.com using `firstname_lastname` as your username.

### 2. Upload / clone your project
In a PythonAnywhere Bash console:
```bash
git clone https://github.com/yourusername/portfolio.git
```

### 3. Create virtual environment and install Django
```bash
mkvirtualenv --python=python3.10 portfolio-env
pip install -r portfolio/requirements.txt
```

### 4. Create Web App
- Go to **Web** tab → **Add a new web app**
- Choose **Manual configuration** → **Python 3.10**
- Source code: `/home/firstname_lastname/portfolio`

### 5. Edit the WSGI file
Replace the WSGI file contents with:
```python
import os, sys
path = '/home/firstname_lastname/portfolio'
if path not in sys.path:
    sys.path.insert(0, path)
os.environ['DJANGO_SETTINGS_MODULE'] = 'portfolio_site.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

### 6. Static files
In the **Web** tab under **Static files**, add:

| URL | Directory |
|-----|-----------|
| `/static/` | `/home/firstname_lastname/portfolio/staticfiles/` |

Then run:
```bash
cd portfolio && python manage.py collectstatic
```

### 7. Update settings for production
In `portfolio_site/settings.py`, change:
```python
DEBUG = False
ALLOWED_HOSTS = ['firstname_lastname.pythonanywhere.com']
```

### 8. Reload the web app
Click **Reload** in the Web tab. Your site is live at:
`https://firstname_lastname.pythonanywhere.com`

---

## Project Structure

```
portfolio_project/
├── manage.py
├── requirements.txt
├── README.md
├── .gitignore
├── portfolio_site/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── portfolio/
    ├── __init__.py
    ├── views.py          ← renders templates
    ├── urls.py           ← URL routing
    ├── templates/
    │   └── portfolio/
    │       ├── base.html
    │       ├── home.html
    │       ├── about.html
    │       ├── skills.html
    │       ├── projects.html
    │       ├── education.html
    │       └── contact.html
    └── static/
        └── portfolio/
            ├── css/style.css
            └── js/main.js
```
