import os

def gci(filepath, ff):
  files = os.listdir(filepath)
  for fi in files:
    fi_d = filepath + '/' + fi            
    if os.path.isdir(fi_d):
      gci(fi_d, ff)                  
    elif fi.endswith('.png') or fi.endswith('.jpg') or fi.endswith('.gif'):
      line = filepath+'/'+fi
      line = '\t".'+line[line.find('/assets/'):]+'",\n'
      ff.write(line)

ff = open('./src/imgList.ts', 'w')
ff.write('let imgList = [\n')
gci('./src/assets', ff)
ff.write('];\n')
ff.write('export default imgList;')
ff.close()