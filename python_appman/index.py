import re
data = raw_input("Input Some String : ")
data = re.sub('[^0-9]', '', data)
print("Covert to Int : " + data)