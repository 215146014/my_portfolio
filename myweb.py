from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/smarthome')
def smarthome():
    return render_template('smarthome.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/biogas')
def biogas():
    return render_template('biogas.html')

@app.route('/allVideos')
def videos():
    return render_template('allVideos.html')

if __name__ == '__main__':
    app.run(debug=True)