if (answerslinkf(theDay) == '#'){
	document.getElementById("f_buttona").disabled = ("true");
	document.getElementById("f_buttona").title = ("There isn't an answer sheet for this dificulty level today.");
}
function answersf(day){
        ga('set', 'page', 'foundation answers');
        ga('send', 'pageview');
		return answerslinkf(day);
}
function answerslinkf(day){
	switch (day) {
		case 1:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-1-foundation-answers.pdf"; break;
		case 2:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-2-foundation-answers.pdf"; break;
		case 3:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-3-foundation-answers.pdf"; break;
		case 4:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-4-foundation-answers.pdf"; break;
		case 5:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-5-foundation-answers.pdf"; break;
		case 6:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-6-foundation-answers.pdf"; break;
		case 7:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-7-foundation-answers.pdf"; break;
		case 8:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-8-foundation-answers.pdf"; break;
		case 9:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-9-foundation-answers.pdf"; break;
		case 10:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-10-foundation-answers.pdf"; break;
		case 11:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-11-foundation-answers.pdf"; break;
		case 12:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-12-foundation-answers.pdf"; break;
		case 13:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-13-foundation-answers.pdf"; break;
		case 14:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-14-foundation-answers.pdf"; break;
		case 15:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-15-foundation-answers.pdf"; break;
		case 16:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-16-foundation-answers.pdf"; break;
		case 17:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-17-foundation-answers.pdf"; break;
		case 18:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-18-foundation-answers.pdf"; break;
		case 19:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-19-foundation-answers.pdf"; break;
		case 20:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-20-foundation-answers.pdf"; break;
		case 21:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-21-foundation-answers.pdf"; break;
		case 22:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-22-foundation-answers.pdf"; break;
		case 23:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-23-foundation-answers.pdf"; break;
		case 24:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-24-foundation-answers.pdf"; break;
		case 25:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-25-foundation-answers.pdf"; break;
		case 26:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-26-foundation-answers.pdf"; break;
		case 27:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-27-foundation-answers.pdf"; break;
		case 28:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-28-foundation-answers.pdf"; break;
		case 29:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-29-foundation-answers.pdf"; break;
		case 30:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-30-foundation-answers.pdf"; break;
		case 31:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-31-foundation-answers.pdf"; break;
		case 32:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-1-f.pdf"; break;
		case 33:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-2nd-f.pdf"; break;
		case 34:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-3-f.pdf"; break;
		case 35:  return "https://corbettmaths.files.wordpress.com/2016/10/february-4-f.pdf"; break;
		case 36:  return "https://corbettmaths.files.wordpress.com/2016/10/february-5-f.pdf"; break;
		case 37:  return "https://corbettmaths.files.wordpress.com/2016/10/february-6-f.pdf"; break;
		case 38:  return "https://corbettmaths.files.wordpress.com/2016/10/february-7-f.pdf"; break;
		case 39:  return "https://corbettmaths.files.wordpress.com/2016/10/february-8-f.pdf"; break;
		case 40:  return "https://corbettmaths.files.wordpress.com/2016/10/february-9-f.pdf"; break;
		case 41:  return "https://corbettmaths.files.wordpress.com/2016/10/february-10-f.pdf"; break;
		case 42:  return "https://corbettmaths.files.wordpress.com/2016/10/february-11th-f.pdf"; break;
		case 43:  return "https://corbettmaths.files.wordpress.com/2016/10/february-12-f.pdf"; break;
		case 44:  return "https://corbettmaths.files.wordpress.com/2016/10/february-13-f.pdf"; break;
		case 45:  return "https://corbettmaths.files.wordpress.com/2016/10/february-14th-f.pdf"; break;
		case 46:  return "https://corbettmaths.files.wordpress.com/2016/10/february-15th-f.pdf"; break;
		case 47:  return "https://corbettmaths.files.wordpress.com/2016/10/february-16th-f.pdf"; break;
		case 48:  return "https://corbettmaths.files.wordpress.com/2016/10/february-17th-f.pdf"; break;
		case 49:  return "https://corbettmaths.files.wordpress.com/2016/10/february-18th-f.pdf"; break;
		case 50:  return "https://corbettmaths.files.wordpress.com/2016/10/february-19th-f.pdf"; break;
		case 51:  return "https://corbettmaths.files.wordpress.com/2016/10/february-20-f.pdf"; break;
		case 52:  return "https://corbettmaths.files.wordpress.com/2016/10/february-21-f.pdf"; break;
		case 53:  return "https://corbettmaths.files.wordpress.com/2016/10/february-22-f.pdf"; break;
		case 54:  return "https://corbettmaths.files.wordpress.com/2016/10/february-23-f.pdf"; break;
		case 55:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-24th-f.pdf"; break;
		case 56:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-25th-f.pdf"; break;
		case 57:  return "https://corbettmaths.files.wordpress.com/2016/10/february-26th-f.pdf"; break;
		case 58:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-27th-f.pdf"; break;
		case 59:  return "https://corbettmaths.files.wordpress.com/2016/10/february-28-f.pdf"; break;
		case 60:  return "https://corbettmaths.files.wordpress.com/2016/10/february-29-f.pdf"; break;
		case 61:  return "https://corbettmaths.files.wordpress.com/2016/10/march-1st-f.pdf"; break;
		case 62:  return "https://corbettmaths.files.wordpress.com/2016/10/march-2nd-f.pdf"; break;
		case 63:  return "https://corbettmaths.files.wordpress.com/2016/10/march-3-pdf1.pdf"; break;
		case 64:  return "https://corbettmaths.files.wordpress.com/2016/10/march-4th-f.pdf"; break;
		case 65:  return "https://corbettmaths.files.wordpress.com/2016/10/march-5th-f.pdf"; break;
		case 66:  return "https://corbettmaths.files.wordpress.com/2016/10/march-6th-f.pdf"; break;
		case 67:  return "https://corbettmaths.files.wordpress.com/2016/10/march-7th-f.pdf"; break;
		case 68:  return "https://corbettmaths.files.wordpress.com/2016/10/march-8-f.pdf"; break;
		case 69:  return "https://corbettmaths.files.wordpress.com/2016/10/march-9th-f.pdf"; break;
		case 70:  return "https://corbettmaths.files.wordpress.com/2016/10/march-10th-f.pdf"; break;
		case 71:  return "https://corbettmaths.files.wordpress.com/2016/10/march-11th-f.pdf"; break;
		case 72:  return "https://corbettmaths.files.wordpress.com/2016/10/march-12th-f.pdf"; break;
		case 73:  return "https://corbettmaths.files.wordpress.com/2016/10/march-13th-f.pdf"; break;
		case 74:  return "https://corbettmaths.files.wordpress.com/2016/10/march-14th-f.pdf"; break;
		case 75:  return "https://corbettmaths.files.wordpress.com/2016/10/march-15th-f.pdf"; break;
		case 76:  return "https://corbettmaths.files.wordpress.com/2016/10/march-16th-f.pdf"; break;
		case 77:  return "https://corbettmaths.files.wordpress.com/2016/10/march-17th-f.pdf"; break;
		case 78:  return "https://corbettmaths.files.wordpress.com/2016/10/march-18th-f.pdf"; break;
		case 79:  return "https://corbettmaths.files.wordpress.com/2016/10/march-19th-f.pdf"; break;
		case 80:  return "https://corbettmaths.files.wordpress.com/2016/10/march-20th-f.pdf"; break;
		case 81:  return "https://corbettmaths.files.wordpress.com/2016/10/march-21st-f.pdf"; break;
		case 82:  return "https://corbettmaths.files.wordpress.com/2016/10/march-22nd-f.pdf"; break;
		case 83:  return "https://corbettmaths.files.wordpress.com/2016/10/march-23rd-f.pdf"; break;
		case 84:  return "https://corbettmaths.files.wordpress.com/2016/10/march-24th-f.pdf"; break;
		case 85:  return "https://corbettmaths.files.wordpress.com/2016/10/march-25th-f.pdf"; break;
		case 86:  return "https://corbettmaths.files.wordpress.com/2016/10/march-26th-f.pdf"; break;
		case 87:  return "https://corbettmaths.files.wordpress.com/2017/03/march-27th-foundation-answers.pdf"; break;
		case 88:  return "https://corbettmaths.files.wordpress.com/2017/03/march-28th-f.pdf"; break;
		case 89:  return "https://corbettmaths.files.wordpress.com/2017/03/march-29th-f.pdf"; break;
		case 90:  return "https://corbettmaths.files.wordpress.com/2017/03/march-30th-f.pdf"; break;
		case 91:  return "https://corbettmaths.files.wordpress.com/2017/03/march-31st-f.pdf"; break;
		case 92:  return "https://corbettmaths.files.wordpress.com/2016/10/april-1st-f.pdf"; break;
		case 93:  return "https://corbettmaths.files.wordpress.com/2016/10/april-2nd-f.pdf"; break;
		case 94:  return "https://corbettmaths.files.wordpress.com/2016/10/april-3rd-f.pdf"; break;
		case 95:  return "https://corbettmaths.files.wordpress.com/2016/10/april-4th-f.pdf"; break;
		case 96:  return "https://corbettmaths.files.wordpress.com/2016/10/april-5th-f.pdf"; break;
		case 97:  return "https://corbettmaths.files.wordpress.com/2016/10/april-6th-f.pdf"; break;
		case 98:  return "https://corbettmaths.files.wordpress.com/2016/10/april-7th-f.pdf"; break;
		case 99:  return "https://corbettmaths.files.wordpress.com/2016/10/april-8th-f.pdf"; break;
		case 100:  return "https://corbettmaths.files.wordpress.com/2016/10/april-9th-f.pdf"; break;
		case 101:  return "https://corbettmaths.files.wordpress.com/2016/10/april-10th-f.pdf"; break;
		case 102:  return "https://corbettmaths.files.wordpress.com/2016/10/april-11th-f.pdf"; break;
		case 103:  return "https://corbettmaths.files.wordpress.com/2016/10/april-12th-f.pdf"; break;
		case 104:  return "https://corbettmaths.files.wordpress.com/2016/10/april-13th-f.pdf"; break;
		case 105:  return "https://corbettmaths.files.wordpress.com/2016/10/april-14th-f.pdf"; break;
		case 106:  return "https://corbettmaths.files.wordpress.com/2016/10/april-15th-f.pdf"; break;
		case 107:  return "https://corbettmaths.files.wordpress.com/2016/10/april-16th-f.pdf"; break;
		case 108:  return "https://corbettmaths.files.wordpress.com/2016/10/april-17th-f.pdf"; break;
		case 109:  return "https://corbettmaths.files.wordpress.com/2016/10/april-18th-f.pdf"; break;
		case 110:  return "https://corbettmaths.files.wordpress.com/2016/10/april-19th-f.pdf"; break;
		case 111:  return "https://corbettmaths.files.wordpress.com/2016/10/april-20th-f.pdf"; break;
		case 112:  return "https://corbettmaths.files.wordpress.com/2016/10/april-21st-f.pdf"; break;
		case 113:  return "https://corbettmaths.files.wordpress.com/2016/10/april-22nd-f.pdf"; break;
		case 114:  return "https://corbettmaths.files.wordpress.com/2016/10/april-23rd-f.pdf"; break;
		case 115:  return "https://corbettmaths.files.wordpress.com/2016/10/april-24th-f.pdf"; break;
		case 116:  return "https://corbettmaths.files.wordpress.com/2016/10/april-25th-f.pdf"; break;
		case 117:  return "https://corbettmaths.files.wordpress.com/2016/10/april-26th-f.pdf"; break;
		case 118:  return "https://corbettmaths.files.wordpress.com/2016/10/april-27th-f.pdf"; break;
		case 119:  return "https://corbettmaths.files.wordpress.com/2016/10/april-28th-f.pdf"; break;
		case 120:  return "https://corbettmaths.files.wordpress.com/2016/10/april-29th-f.pdf"; break;
		case 121:  return "https://corbettmaths.files.wordpress.com/2016/10/april-30th-f.pdf"; break;
		case 122:  return "https://corbettmaths.files.wordpress.com/2016/10/may-1st-f.pdf"; break;
		case 123:  return "https://corbettmaths.files.wordpress.com/2016/10/may-2nd-f.pdf"; break;
		case 124:  return "https://corbettmaths.files.wordpress.com/2016/10/may-3rd-f.pdf"; break;
		case 125:  return "https://corbettmaths.files.wordpress.com/2016/10/may-4th-f.pdf"; break;
		case 126:  return "https://corbettmaths.files.wordpress.com/2016/10/may-5th-f.pdf"; break;
		case 127:  return "https://corbettmaths.files.wordpress.com/2016/10/may-6th-f.pdf"; break;
		case 128:  return "https://corbettmaths.files.wordpress.com/2016/10/may-7th-f.pdf"; break;
		case 129:  return "https://corbettmaths.files.wordpress.com/2016/10/may-8th-f.pdf"; break;
		case 130:  return "https://corbettmaths.files.wordpress.com/2016/10/may-9th-f.pdf"; break;
		case 131:  return "https://corbettmaths.files.wordpress.com/2016/10/may-10th-f.pdf"; break;
		case 132:  return "https://corbettmaths.files.wordpress.com/2016/10/may-11th-f.pdf"; break;
		case 133:  return "https://corbettmaths.files.wordpress.com/2016/10/may-12th-f.pdf"; break;
		case 134:  return "https://corbettmaths.files.wordpress.com/2016/10/may-13th-f.pdf"; break;
		case 135:  return "https://corbettmaths.files.wordpress.com/2016/10/may-14th-f.pdf"; break;
		case 136:  return "https://corbettmaths.files.wordpress.com/2016/10/may-15th-f.pdf"; break;
		case 137:  return "https://corbettmaths.files.wordpress.com/2016/10/may-16th-f.pdf"; break;
		case 138:  return "https://corbettmaths.files.wordpress.com/2016/10/may-17th-f.pdf"; break;
		case 139:  return "https://corbettmaths.files.wordpress.com/2016/10/may-18th-f.pdf"; break;
		case 140:  return "https://corbettmaths.files.wordpress.com/2016/10/may-19th-f.pdf"; break;
		case 141:  return "https://corbettmaths.files.wordpress.com/2016/10/may-20th-f.pdf"; break;
		case 142:  return "https://corbettmaths.files.wordpress.com/2016/10/may-21st-f.pdf"; break;
		case 143:  return "https://corbettmaths.files.wordpress.com/2016/10/may-22nd-f.pdf"; break;
		case 144:  return "https://corbettmaths.files.wordpress.com/2016/10/may-23rd-f.pdf"; break;
		case 145:  return "https://corbettmaths.files.wordpress.com/2016/10/may-24th-f.pdf"; break;
		case 146:  return "https://corbettmaths.files.wordpress.com/2016/10/may-25th-f.pdf"; break;
		case 147:  return "https://corbettmaths.files.wordpress.com/2016/10/may-26th-f.pdf"; break;
		case 148:  return "https://corbettmaths.files.wordpress.com/2016/10/may-27-f.pdf"; break;
		case 149:  return "https://corbettmaths.files.wordpress.com/2016/10/may-28th-f.pdf"; break;
		case 150:  return "https://corbettmaths.files.wordpress.com/2016/10/may-29th-f.pdf"; break;
		case 151:  return "https://corbettmaths.files.wordpress.com/2016/10/may-30th-f.pdf"; break;
		case 152:  return "https://corbettmaths.files.wordpress.com/2016/10/may-31st-f.pdf"; break;
		case 153:  return "https://corbettmaths.files.wordpress.com/2016/10/june-1-f.pdf"; break;
		case 154:  return "#"; break;
		case 155:  return "https://corbettmaths.files.wordpress.com/2016/10/june-3-f.pdf"; break;
		case 156:  return "#"; break;
		case 157:  return "https://corbettmaths.files.wordpress.com/2016/10/june-5-f.pdf"; break;
		case 158:  return "https://corbettmaths.files.wordpress.com/2016/10/june-6-f.pdf"; break;
		case 159:  return "https://corbettmaths.files.wordpress.com/2016/10/june-7-f.pdf"; break;
		case 160:  return "https://corbettmaths.files.wordpress.com/2016/10/june-8-f.pdf"; break;
		case 161:  return "#"; break;
		case 162:  return "https://corbettmaths.files.wordpress.com/2016/10/june-10-f.pdf"; break;
		case 163:  return "https://corbettmaths.files.wordpress.com/2016/10/june-11-f.pdf"; break;
		case 164:  return "https://corbettmaths.files.wordpress.com/2016/10/june-12-f.pdf"; break;
		case 165:  return "https://corbettmaths.files.wordpress.com/2016/10/june-13-f.pdf"; break;
		case 166:  return "https://corbettmaths.files.wordpress.com/2016/10/june-14-f.pdf"; break;
		case 167:  return "#"; break;
		case 168:  return "https://corbettmaths.files.wordpress.com/2016/10/june-16-f.pdf"; break;
		case 169:  return "https://corbettmaths.files.wordpress.com/2016/10/june-17-f.pdf"; break;
		case 170:  return "https://corbettmaths.files.wordpress.com/2016/10/june-18-f.pdf"; break;
		case 171:  return "https://corbettmaths.files.wordpress.com/2016/10/june-19-f.pdf"; break;
		case 172:  return "https://corbettmaths.files.wordpress.com/2016/10/june-20-f.pdf"; break;
		case 173:  return "https://corbettmaths.files.wordpress.com/2016/10/june-21-f.pdf"; break;
		case 174:  return "https://corbettmaths.files.wordpress.com/2016/10/june-22-f.pdf"; break;
		case 175:  return "https://corbettmaths.files.wordpress.com/2016/10/june-23-f.pdf"; break;
		case 176:  return "https://corbettmaths.files.wordpress.com/2016/10/june-24-f.pdf"; break;
		case 177:  return "https://corbettmaths.files.wordpress.com/2016/10/june-25-f.pdf"; break;
		case 178:  return "https://corbettmaths.files.wordpress.com/2016/10/june-26-f.pdf"; break;
		case 179:  return "https://corbettmaths.files.wordpress.com/2016/10/june-27-f.pdf"; break;
		case 180:  return "https://corbettmaths.files.wordpress.com/2016/10/june-28-f.pdf"; break;
		case 181:  return "https://corbettmaths.files.wordpress.com/2016/10/june-29-f.pdf"; break;
		case 182:  return "https://corbettmaths.files.wordpress.com/2016/10/june-30-f.pdf"; break;
		case 183:  return "https://corbettmaths.files.wordpress.com/2016/10/july-1-f.pdf"; break;
		case 184:  return "https://corbettmaths.files.wordpress.com/2016/10/july-2-f.pdf"; break;
		case 185:  return "https://corbettmaths.files.wordpress.com/2016/10/july-3-f.pdf"; break;
		case 186:  return "https://corbettmaths.files.wordpress.com/2016/10/july-4-f.pdf"; break;
		case 187:  return "https://corbettmaths.files.wordpress.com/2016/10/july-5-f.pdf"; break;
		case 188:  return "https://corbettmaths.files.wordpress.com/2016/10/july-6-f.pdf"; break;
		case 189:  return "https://corbettmaths.files.wordpress.com/2016/10/july-7-f.pdf"; break;
		case 190:  return "https://corbettmaths.files.wordpress.com/2016/10/july-8-f.pdf"; break;
		case 191:  return "https://corbettmaths.files.wordpress.com/2016/10/july-9th-f.pdf"; break;
		case 192:  return "https://corbettmaths.files.wordpress.com/2016/10/july-10-f.pdf"; break;
		case 193:  return "https://corbettmaths.files.wordpress.com/2016/10/july-11-f.pdf"; break;
		case 194:  return "https://corbettmaths.files.wordpress.com/2016/10/july-12-f.pdf"; break;
		case 195:  return "https://corbettmaths.files.wordpress.com/2016/10/july-13-f.pdf"; break;
		case 196:  return "https://corbettmaths.files.wordpress.com/2016/10/july-14-f.pdf"; break;
		case 197:  return "https://corbettmaths.files.wordpress.com/2016/10/july-15-f.pdf"; break;
		case 198:  return "https://corbettmaths.files.wordpress.com/2016/10/july-16-f.pdf"; break;
		case 199:  return "https://corbettmaths.files.wordpress.com/2016/10/july-17-f.pdf"; break;
		case 200:  return "https://corbettmaths.files.wordpress.com/2016/10/july-18-f.pdf"; break;
		case 201:  return "https://corbettmaths.files.wordpress.com/2016/10/july-19-f.pdf"; break;
		case 202:  return "https://corbettmaths.files.wordpress.com/2016/10/july-20-f.pdf"; break;
		case 203:  return "https://corbettmaths.files.wordpress.com/2016/10/july-21-f.pdf"; break;
		case 204:  return "https://corbettmaths.files.wordpress.com/2016/10/july-22-f.pdf"; break;
		case 205:  return "https://corbettmaths.files.wordpress.com/2016/10/july-23-f.pdf"; break;
		case 206:  return "https://corbettmaths.files.wordpress.com/2016/10/july-24-f.pdf"; break;
		case 207:  return "https://corbettmaths.files.wordpress.com/2016/10/july-25-f.pdf"; break;
		case 208:  return "https://corbettmaths.files.wordpress.com/2016/10/july-26-f.pdf"; break;
		case 209:  return "https://corbettmaths.files.wordpress.com/2016/10/july-27-f.pdf"; break;
		case 210:  return "https://corbettmaths.files.wordpress.com/2016/10/july-28-f.pdf"; break;
		case 211:  return "https://corbettmaths.files.wordpress.com/2016/10/july-29-f.pdf"; break;
		case 212:  return "https://corbettmaths.files.wordpress.com/2016/10/july-30-f.pdf"; break;
		case 213:  return "https://corbettmaths.files.wordpress.com/2016/10/july-31-f.pdf"; break;
		case 214:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-1-f.pdf"; break;
		case 215:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-2-f.pdf"; break;
		case 216:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-3-f.pdf"; break;
		case 217:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-4-f.pdf"; break;
		case 218:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-5-f.pdf"; break;
		case 219:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-6-f.pdf"; break;
		case 220:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-7-f.pdf"; break;
		case 221:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-8-f.pdf"; break;
		case 222:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-9-f.pdf"; break;
		case 223:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-10-f.pdf"; break;
		case 224:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-11-f.pdf"; break;
		case 225:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-12-f.pdf"; break;
		case 226:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-13-f.pdf"; break;
		case 227:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-14-f.pdf"; break;
		case 228:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-15-f.pdf"; break;
		case 229:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-16-f.pdf"; break;
		case 230:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-17-f.pdf"; break;
		case 231:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-18-f.pdf"; break;
		case 232:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-19-f.pdf"; break;
		case 233:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-20-f.pdf"; break;
		case 234:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-21-f.pdf"; break;
		case 235:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-22-f.pdf"; break;
		case 236:  return "https://corbettmaths.files.wordpress.com/2016/10/august-23-f.pdf"; break;
		case 237:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-24-f.pdf"; break;
		case 238:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-25-f.pdf"; break;
		case 239:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-26-f.pdf"; break;
		case 240:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-27-f.pdf"; break;
		case 241:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-28-f.pdf"; break;
		case 242:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-29-f.pdf"; break;
		case 243:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-30-f.pdf"; break;
		case 244:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-31-f.pdf"; break;
		case 245:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-1-f.pdf"; break;
		case 246:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-2-f.pdf"; break;
		case 247:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-3-f.pdf"; break;
		case 248:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-4-f.pdf"; break;
		case 249:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-5-f.pdf"; break;
		case 250:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-6-f.pdf"; break;
		case 251:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-7-f.pdf"; break;
		case 252:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-8-f.pdf"; break;
		case 253:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-9-f.pdf"; break;
		case 254:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-10-f.pdf"; break;
		case 255:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-11-f.pdf"; break;
		case 256:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-12-f.pdf"; break;
		case 257:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-13-f.pdf"; break;
		case 258:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-14-f.pdf"; break;
		case 259:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-15-f.pdf"; break;
		case 260:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-16-f.pdf"; break;
		case 261:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-17-f.pdf"; break;
		case 262:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-18-f.pdf"; break;
		case 263:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-19-f.pdf"; break;
		case 264:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-20-f-ans.pdf"; break;
		case 265:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-21-f.pdf"; break;
		case 266:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-22-f.pdf"; break;
		case 267:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-23-f.pdf"; break;
		case 268:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-24-f.pdf"; break;
		case 269:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-25-f.pdf"; break;
		case 270:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-26-f.pdf"; break;
		case 271:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-27-f.pdf"; break;
		case 272:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-28-f.pdf"; break;
		case 273:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-29-f.pdf"; break;
		case 274:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-30-f.pdf"; break;
		case 275:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-1-f.pdf"; break;
		case 276:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-2-f.pdf"; break;
		case 277:  return "https://corbettmaths.files.wordpress.com/2017/07/oct-3-f.pdf"; break;
		case 278:  return "https://corbettmaths.files.wordpress.com/2017/07/oct-4-f.pdf"; break;
		case 279:  return "https://corbettmaths.files.wordpress.com/2017/07/oct-5-f.pdf"; break;
		case 280:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-6-f.pdf"; break;
		case 281:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-7-f.pdf"; break;
		case 282:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-8-f.pdf"; break;
		case 283:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-9-f.pdf"; break;
		case 284:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-10-f.pdf"; break;
		case 285:  return "https://corbettmaths.files.wordpress.com/2016/08/oct-11-f.pdf"; break;
		case 286:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-12-f.pdf"; break;
		case 287:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-13-f.pdf"; break;
		case 288:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-14-f.pdf"; break;
		case 289:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-15-f.pdf"; break;
		case 290:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-16-f.pdf"; break;
		case 291:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-17-f.pdf"; break;
		case 292:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-18-f.pdf"; break;
		case 293:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-19-f.pdf"; break;
		case 294:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-20-f.pdf"; break;
		case 295:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-21-f.pdf"; break;
		case 296:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-22-f.pdf"; break;
		case 297:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-23-f.pdf"; break;
		case 298:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-24-f.pdf"; break;
		case 299:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-25-f.pdf"; break;
		case 300:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-26-f.pdf"; break;
		case 301:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-27-f.pdf"; break;
		case 302:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-28-f.pdf"; break;
		case 303:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-29-f.pdf"; break;
		case 304:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-30-f.pdf"; break;
		case 305:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-31-f.pdf"; break;
		case 306:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-1-f.pdf"; break;
		case 307:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-2-f.pdf"; break;
		case 308:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-3-f.pdf"; break;
		case 309:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-4-f.pdf"; break;
		case 310:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-5-f.pdf"; break;
		case 311:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-6-f.pdf"; break;
		case 312:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-7-f.pdf"; break;
		case 313:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-8-f.pdf"; break;
		case 314:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-9-f.pdf"; break;
		case 315:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-10-f.pdf"; break;
		case 316:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-11-f.pdf"; break;
		case 317:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-12-f.pdf"; break;
		case 318:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-13-f.pdf"; break;
		case 319:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-14-f.pdf"; break;
		case 320:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-15-f.pdf"; break;
		case 321:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-16-f.pdf"; break;
		case 322:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-17-f.pdf"; break;
		case 323:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-18-f.pdf"; break;
		case 324:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-19-f.pdf"; break;
		case 325:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-20-f.pdf"; break;
		case 326:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-21-f.pdf"; break;
		case 327:  return "https://corbettmaths.files.wordpress.com/2017/05/nov-22-f.pdf"; break;
		case 328:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-23-f.pdf"; break;
		case 329:  return "https://corbettmaths.files.wordpress.com/2017/05/nov-24-f.pdf"; break;
		case 330:  return "https://corbettmaths.files.wordpress.com/2017/05/nov-25-f.pdf"; break;
		case 331:  return "https://corbettmaths.files.wordpress.com/2017/05/nov-26-f.pdf"; break;
		case 332:  return "https://corbettmaths.files.wordpress.com/2017/05/nov-27-f.pdf"; break;
		case 333:  return "https://corbettmaths.files.wordpress.com/2017/05/nov-28-f.pdf"; break;
		case 334:  return "https://corbettmaths.files.wordpress.com/2017/05/nov-29-f.pdf"; break;
		case 335:  return "https://corbettmaths.files.wordpress.com/2017/05/nov-30-f.pdf"; break;
		case 336:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-1-f.pdf"; break;
		case 337:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-2-f.pdf"; break;
		case 338:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-3-f.pdf"; break;
		case 339:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-4-f.pdf"; break;
		case 340:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-5-f.pdf"; break;
		case 341:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-6-f.pdf"; break;
		case 342:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-7-f.pdf"; break;
		case 343:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-8-f.pdf"; break;
		case 344:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-9-f.pdf"; break;
		case 345:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-10-f.pdf"; break;
		case 346:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-11-f.pdf"; break;
		case 347:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-12-f.pdf"; break;
		case 348:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-13-f.pdf"; break;
		case 349:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-14-f.pdf"; break;
		case 350:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-15-f.pdf"; break;
		case 351:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-16-f.pdf"; break;
		case 352:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-17-f.pdf"; break;
		case 353:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-18-f.pdf"; break;
		case 354:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-19-f.pdf"; break;
		case 355:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-20-f.pdf"; break;
		case 356:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-21-f.pdf"; break;
		case 357:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-22-f.pdf"; break;
		case 358:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-23-f.pdf"; break;
		case 359:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-24-f.pdf"; break;
		case 360:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-25-f.pdf"; break;
		case 361:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-26-f.pdf"; break;
		case 362:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-27-f.pdf"; break;
		case 363:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-28-f.pdf"; break;
		case 364:  return "https://corbettmaths.files.wordpress.com/2017/05/dec-29-f.pdf"; break;
		case 365:  return "https://corbettmaths.files.wordpress.com/2017/05/dec-30-f.pdf"; break;
		case 366:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-31-f.pdf"; break;


	};
}