import os

def gci(filepath, ff):
  files = os.listdir(filepath)
  for fi in files:
    fi_d = filepath + '/' + fi            
    if os.path.isdir(fi_d):
      gci(fi_d, ff)                  
    elif fi.endswith('.png') or fi.endswith('.jpg') or fi.endswith('.gif'):
      line = filepath+'/'+fi
      line = '\t<img src="'+line[line.find('/assets/'):]+'" />\n'
      ff.write(line)

ff = open('./src/app/allImage/allImage.component.html', 'w')
ff.write('<div>\n')
gci('./src/assets', ff)
ff.write('</div>\n')
ff.close()