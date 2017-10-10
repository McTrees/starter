if (answerslinkh(theDay) == '#'){
	document.getElementById("h_buttona").disabled = ("true");
	document.getElementById("h_buttona").title = ("There isn't an answer sheet for this dificulty level today.");
}
function answersh(day){
        ga('set', 'page', 'higher answers');
        ga('send', 'pageview');
		return answerslinkh(day);
}
function answerslinkh(day){
	switch (day) {
		case 1:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-1-higher-answers.pdf"; break;
		case 2:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-2-h.pdf"; break;
		case 3:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-3-higher-answers.pdf"; break;
		case 4:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-4-higher-answers.pdf"; break;
		case 5:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-5-higher-answers.pdf"; break;
		case 6:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-6-higher-answers2.pdf"; break;
		case 7:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-7-higher-answers.pdf"; break;
		case 8:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-8-higher-answers2.pdf"; break;
		case 9:  return "https://corbettmaths.files.wordpress.com/2016/10/january-9th-h.pdf"; break;
		case 10:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-10-higher-answers.pdf"; break;
		case 11:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-11-higher-answers.pdf"; break;
		case 12:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-12-higher-answers.pdf"; break;
		case 13:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-13-higher-answers.pdf"; break;
		case 14:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-14-higher-answers.pdf"; break;
		case 15:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-15-higher-answers.pdf"; break;
		case 16:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-16-higher-answers.pdf"; break;
		case 17:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-17-higher-answers.pdf"; break;
		case 18:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-18-higher-answers.pdf"; break;
		case 19:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-19-higher-answers.pdf"; break;
		case 20:  return "https://corbettmaths.files.wordpress.com/2016/10/january-20th-h.pdf"; break;
		case 21:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-21-higher-answers.pdf"; break;
		case 22:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-22-higher-answers.pdf"; break;
		case 23:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-23-higher-answers.pdf"; break;
		case 24:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-24-higher-answers.pdf"; break;
		case 25:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-25-higher-answers.pdf"; break;
		case 26:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-26-higher-answers.pdf"; break;
		case 27:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-27-higher-answers.pdf"; break;
		case 28:  return "https://corbettmaths.files.wordpress.com/2016/10/january-28th-h.pdf"; break;
		case 29:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-29-higher-answers.pdf"; break;
		case 30:  return "https://corbettmaths.files.wordpress.com/2016/10/january-30th-h.pdf"; break;
		case 31:  return "https://corbettmaths.files.wordpress.com/2016/10/jan-31-higher-answers.pdf"; break;
		case 32:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-1-h.pdf"; break;
		case 33:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-2-h.pdf"; break;
		case 34:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-3-h.pdf"; break;
		case 35:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-4-h.pdf"; break;
		case 36:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-5-h.pdf"; break;
		case 37:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-6-h.pdf"; break;
		case 38:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-7-h.pdf"; break;
		case 39:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-8-h.pdf"; break;
		case 40:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-9-h.pdf"; break;
		case 41:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-10-h.pdf"; break;
		case 42:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-11-hp.pdf"; break;
		case 43:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-12-h.pdf"; break;
		case 44:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-13-h.pdf"; break;
		case 45:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-14-h.pdf"; break;
		case 46:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-15-h.pdf"; break;
		case 47:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-16-h.pdf"; break;
		case 48:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-17-h.pdf"; break;
		case 49:  return "https://corbettmaths.files.wordpress.com/2017/05/feb-18-h.pdf"; break;
		case 50:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-19-h.pdf"; break;
		case 51:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-20-h.pdf"; break;
		case 52:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-21-h.pdf"; break;
		case 53:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-22-h.pdf"; break;
		case 54:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-23-h.pdf"; break;
		case 55:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-24-h.pdf"; break;
		case 56:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-25-h.pdf"; break;
		case 57:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-26-h.pdf"; break;
		case 58:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-27-h.pdf"; break;
		case 59:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-28-h.pdf"; break;
		case 60:  return "https://corbettmaths.files.wordpress.com/2016/10/feb-29-h.pdf"; break;
		case 61:  return "https://corbettmaths.files.wordpress.com/2016/10/march-1-h.pdf"; break;
		case 62:  return "https://corbettmaths.files.wordpress.com/2016/10/march-2-h.pdf"; break;
		case 63:  return "https://corbettmaths.files.wordpress.com/2016/10/march-3-h.pdf"; break;
		case 64:  return "https://corbettmaths.files.wordpress.com/2016/10/march-4-h.pdf"; break;
		case 65:  return "https://corbettmaths.files.wordpress.com/2016/10/march-5-h.pdf"; break;
		case 66:  return "https://corbettmaths.files.wordpress.com/2016/10/march-6-h.pdf"; break;
		case 67:  return "https://corbettmaths.files.wordpress.com/2016/10/march-7-h.pdf"; break;
		case 68:  return "https://corbettmaths.files.wordpress.com/2016/10/march-8-h.pdf"; break;
		case 69:  return "https://corbettmaths.files.wordpress.com/2016/10/march-9-h.pdf"; break;
		case 70:  return "https://corbettmaths.files.wordpress.com/2016/10/march-10-h.pdf"; break;
		case 71:  return "https://corbettmaths.files.wordpress.com/2016/10/march-11-h.pdf"; break;
		case 72:  return "https://corbettmaths.files.wordpress.com/2016/10/march-12-h.pdf"; break;
		case 73:  return "https://corbettmaths.files.wordpress.com/2016/10/march-13-h.pdf"; break;
		case 74:  return "https://corbettmaths.files.wordpress.com/2016/10/march-14-h.pdf"; break;
		case 75:  return "https://corbettmaths.files.wordpress.com/2016/10/march-15-h.pdf"; break;
		case 76:  return "https://corbettmaths.files.wordpress.com/2016/10/march-16-h.pdf"; break;
		case 77:  return "https://corbettmaths.files.wordpress.com/2016/10/march-17-h.pdf"; break;
		case 78:  return "https://corbettmaths.files.wordpress.com/2016/10/march-18-h.pdf"; break;
		case 79:  return "https://corbettmaths.files.wordpress.com/2016/10/march-19-h.pdf"; break;
		case 80:  return "https://corbettmaths.files.wordpress.com/2016/10/march-20-h.pdf"; break;
		case 81:  return "https://corbettmaths.files.wordpress.com/2016/10/march-21-h.pdf"; break;
		case 82:  return "https://corbettmaths.files.wordpress.com/2016/10/march-22nd-h.pdf"; break;
		case 83:  return "https://corbettmaths.files.wordpress.com/2016/10/march-23-h.pdf"; break;
		case 84:  return "https://corbettmaths.files.wordpress.com/2016/10/march-24-h.pdf"; break;
		case 85:  return "https://corbettmaths.files.wordpress.com/2016/10/march-25-h.pdf"; break;
		case 86:  return "https://corbettmaths.files.wordpress.com/2016/10/march-26-h.pdf"; break;
		case 87:  return "https://corbettmaths.files.wordpress.com/2017/03/march-27th-higher-answers.pdf"; break;
		case 88:  return "https://corbettmaths.files.wordpress.com/2017/03/march-28th-higher-answers.pdf"; break;
		case 89:  return "https://corbettmaths.files.wordpress.com/2017/03/march-29th-h.pdf"; break;
		case 90:  return "https://corbettmaths.files.wordpress.com/2017/03/march-30th-higher-answers.pdf"; break;
		case 91:  return "https://corbettmaths.files.wordpress.com/2016/10/march-31st-h.pdf"; break;
		case 92:  return "https://corbettmaths.files.wordpress.com/2016/10/april-1st-h.pdf"; break;
		case 93:  return "https://corbettmaths.files.wordpress.com/2016/10/april-2nd-h.pdf"; break;
		case 94:  return "https://corbettmaths.files.wordpress.com/2016/10/april-3rd-h.pdf"; break;
		case 95:  return "https://corbettmaths.files.wordpress.com/2016/10/april-4th-h.pdf"; break;
		case 96:  return "https://corbettmaths.files.wordpress.com/2016/10/april-5th-h.pdf"; break;
		case 97:  return "https://corbettmaths.files.wordpress.com/2016/10/april-6th-h.pdf"; break;
		case 98:  return "https://corbettmaths.files.wordpress.com/2016/10/april-7th-h.pdf"; break;
		case 99:  return "https://corbettmaths.files.wordpress.com/2016/10/april-8th-h.pdf"; break;
		case 100:  return "https://corbettmaths.files.wordpress.com/2016/10/april-9th-h.pdf"; break;
		case 101:  return "https://corbettmaths.files.wordpress.com/2016/10/april-10th-h.pdf"; break;
		case 102:  return "https://corbettmaths.files.wordpress.com/2016/10/april-11th-h.pdf"; break;
		case 103:  return "https://corbettmaths.files.wordpress.com/2016/10/april-12th-h.pdf"; break;
		case 104:  return "https://corbettmaths.files.wordpress.com/2016/10/april-13th-h.pdf"; break;
		case 105:  return "https://corbettmaths.files.wordpress.com/2016/10/april-14th-h.pdf"; break;
		case 106:  return "https://corbettmaths.files.wordpress.com/2016/10/april-15th-h.pdf"; break;
		case 107:  return "https://corbettmaths.files.wordpress.com/2016/10/april-16th-h.pdf"; break;
		case 108:  return "https://corbettmaths.files.wordpress.com/2016/10/april-17th-h.pdf"; break;
		case 109:  return "https://corbettmaths.files.wordpress.com/2016/10/april-18th-h.pdf"; break;
		case 110:  return "https://corbettmaths.files.wordpress.com/2016/10/april-19th-h.pdf"; break;
		case 111:  return "https://corbettmaths.files.wordpress.com/2016/10/april-20th-h.pdf"; break;
		case 112:  return "https://corbettmaths.files.wordpress.com/2016/10/april-21st-h.pdf"; break;
		case 113:  return "https://corbettmaths.files.wordpress.com/2016/10/april-22nd-h.pdf"; break;
		case 114:  return "https://corbettmaths.files.wordpress.com/2016/10/april-23rd-h.pdf"; break;
		case 115:  return "https://corbettmaths.files.wordpress.com/2016/10/april-24th-h.pdf"; break;
		case 116:  return "https://corbettmaths.files.wordpress.com/2016/10/april-25th-h.pdf"; break;
		case 117:  return "https://corbettmaths.files.wordpress.com/2016/10/april-26th-h.pdf"; break;
		case 118:  return "https://corbettmaths.files.wordpress.com/2016/10/april-27th-h.pdf"; break;
		case 119:  return "https://corbettmaths.files.wordpress.com/2016/10/april-28th-h.pdf"; break;
		case 120:  return "https://corbettmaths.files.wordpress.com/2016/10/april-29th-h.pdf"; break;
		case 121:  return "https://corbettmaths.files.wordpress.com/2016/10/april-30th-h.pdf"; break;
		case 122:  return "https://corbettmaths.files.wordpress.com/2017/07/may-1-h.pdf"; break;
		case 123:  return "https://corbettmaths.files.wordpress.com/2016/10/may-2-h.pdf"; break;
		case 124:  return "https://corbettmaths.files.wordpress.com/2016/10/may-3-h.pdf"; break;
		case 125:  return "https://corbettmaths.files.wordpress.com/2016/10/may-4-h.pdf"; break;
		case 126:  return "https://corbettmaths.files.wordpress.com/2017/07/may-5-h.pdf"; break;
		case 127:  return "https://corbettmaths.files.wordpress.com/2016/10/may-6-h.pdf"; break;
		case 128:  return "https://corbettmaths.files.wordpress.com/2016/10/may-7-h.pdf"; break;
		case 129:  return "https://corbettmaths.files.wordpress.com/2017/07/may-8-h.pdf"; break;
		case 130:  return "https://corbettmaths.files.wordpress.com/2016/10/may-9-h.pdf"; break;
		case 131:  return "https://corbettmaths.files.wordpress.com/2016/10/may-10-h.pdf"; break;
		case 132:  return "https://corbettmaths.files.wordpress.com/2016/10/may-11-h.pdf"; break;
		case 133:  return "https://corbettmaths.files.wordpress.com/2016/10/may-12-h.pdf"; break;
		case 134:  return "https://corbettmaths.files.wordpress.com/2016/10/may-13-h.pdf"; break;
		case 135:  return "https://corbettmaths.files.wordpress.com/2016/10/may-14-h.pdf"; break;
		case 136:  return "https://corbettmaths.files.wordpress.com/2016/10/may-15-h.pdf"; break;
		case 137:  return "https://corbettmaths.files.wordpress.com/2016/10/may-16-h.pdf"; break;
		case 138:  return "https://corbettmaths.files.wordpress.com/2016/10/may-17-h.pdf"; break;
		case 139:  return "https://corbettmaths.files.wordpress.com/2016/10/may-18-h.pdf"; break;
		case 140:  return "https://corbettmaths.files.wordpress.com/2016/10/may-19-h.pdf"; break;
		case 141:  return "https://corbettmaths.files.wordpress.com/2016/10/may-20-h.pdf"; break;
		case 142:  return "https://corbettmaths.files.wordpress.com/2016/10/may-21-h.pdf"; break;
		case 143:  return "https://corbettmaths.files.wordpress.com/2016/10/may-22-h.pdf"; break;
		case 144:  return "https://corbettmaths.files.wordpress.com/2016/10/may-23-h.pdf"; break;
		case 145:  return "https://corbettmaths.files.wordpress.com/2016/10/may-24-h.pdf"; break;
		case 146:  return "https://corbettmaths.files.wordpress.com/2016/10/may-25-h.pdf"; break;
		case 147:  return "https://corbettmaths.files.wordpress.com/2016/10/may-26-h.pdf"; break;
		case 148:  return "https://corbettmaths.files.wordpress.com/2016/10/may-27-h.pdf"; break;
		case 149:  return "https://corbettmaths.files.wordpress.com/2016/10/may-28-h.pdf"; break;
		case 150:  return "https://corbettmaths.files.wordpress.com/2016/10/may-29-h.pdf"; break;
		case 151:  return "https://corbettmaths.files.wordpress.com/2016/10/may-30-h.pdf"; break;
		case 152:  return "https://corbettmaths.files.wordpress.com/2016/10/may-31-h.pdf"; break;
		case 153:  return "https://corbettmaths.files.wordpress.com/2016/10/june-1-h.pdf"; break;
		case 154: NO_MATCH_FOUND
		case 155:  return "https://corbettmaths.files.wordpress.com/2016/10/june-3-h.pdf"; break;
		case 156: NO_MATCH_FOUND
		case 157:  return "https://corbettmaths.files.wordpress.com/2016/10/june-5-h.pdf"; break;
		case 158:  return "https://corbettmaths.files.wordpress.com/2016/10/june-6-h.pdf"; break;
		case 159:  return "https://corbettmaths.files.wordpress.com/2016/10/june-7-h.pdf"; break;
		case 160:  return "https://corbettmaths.files.wordpress.com/2016/10/june-8-h.pdf"; break;
		case 161:  return "https://corbettmaths.files.wordpress.com/2016/10/june-9-h.pdf"; break;
		case 162:  return "https://corbettmaths.files.wordpress.com/2016/10/june-10-h.pdf"; break;
		case 163:  return "https://corbettmaths.files.wordpress.com/2016/10/june-11-h.pdf"; break;
		case 164:  return "https://corbettmaths.files.wordpress.com/2016/10/june-12-h.pdf"; break;
		case 165:  return "https://corbettmaths.files.wordpress.com/2016/10/june-13-h.pdf"; break;
		case 166: NO_MATCH_FOUND
		case 167:  return "https://corbettmaths.files.wordpress.com/2016/10/june-15-h.pdf"; break;
		case 168:  return "https://corbettmaths.files.wordpress.com/2016/10/june-16-h.pdf"; break;
		case 169: NO_MATCH_FOUND
		case 170:  return "https://corbettmaths.files.wordpress.com/2016/10/june-18-h.pdf"; break;
		case 171: NO_MATCH_FOUND
		case 172: NO_MATCH_FOUND
		case 173: NO_MATCH_FOUND
		case 174:  return "https://corbettmaths.files.wordpress.com/2016/10/june-22-h.pdf"; break;
		case 175:  return "https://corbettmaths.files.wordpress.com/2016/10/june-23-h.pdf"; break;
		case 176:  return "https://corbettmaths.files.wordpress.com/2016/10/june-24-h.pdf"; break;
		case 177: NO_MATCH_FOUND
		case 178: NO_MATCH_FOUND
		case 179:  return "https://corbettmaths.files.wordpress.com/2016/10/june-27-h.pdf"; break;
		case 180: NO_MATCH_FOUND
		case 181:  return "https://corbettmaths.files.wordpress.com/2016/10/june-29-h.pdf"; break;
		case 182:  return "https://corbettmaths.files.wordpress.com/2016/10/june-30-h.pdf"; break;
		case 183: NO_MATCH_FOUND
		case 184: NO_MATCH_FOUND
		case 185:  return "https://corbettmaths.files.wordpress.com/2016/10/july-3-h.pdf"; break;
		case 186: NO_MATCH_FOUND
		case 187: NO_MATCH_FOUND
		case 188: NO_MATCH_FOUND
		case 189: NO_MATCH_FOUND
		case 190: NO_MATCH_FOUND
		case 191: NO_MATCH_FOUND
		case 192: NO_MATCH_FOUND
		case 193: NO_MATCH_FOUND
		case 194: NO_MATCH_FOUND
		case 195: NO_MATCH_FOUND
		case 196: NO_MATCH_FOUND
		case 197: NO_MATCH_FOUND
		case 198:  return "https://corbettmaths.files.wordpress.com/2016/10/july-16-h.pdf"; break;
		case 199: NO_MATCH_FOUND
		case 200:  return "https://corbettmaths.files.wordpress.com/2016/10/july-18-h.pdf"; break;
		case 201: NO_MATCH_FOUND
		case 202: NO_MATCH_FOUND
		case 203: NO_MATCH_FOUND
		case 204: NO_MATCH_FOUND
		case 205:  return "https://corbettmaths.files.wordpress.com/2016/10/july-23-h.pdf"; break;
		case 206:  return "https://corbettmaths.files.wordpress.com/2016/10/july-24-h.pdf"; break;
		case 207: NO_MATCH_FOUND
		case 208:  return "https://corbettmaths.files.wordpress.com/2016/10/july-26-h.pdf"; break;
		case 209: NO_MATCH_FOUND
		case 210: NO_MATCH_FOUND
		case 211: NO_MATCH_FOUND
		case 212:  return "https://corbettmaths.files.wordpress.com/2016/10/july-30-h.pdf"; break;
		case 213:  return "https://corbettmaths.files.wordpress.com/2016/10/july-31-h.pdf"; break;
		case 214:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-1-h.pdf"; break;
		case 215: NO_MATCH_FOUND
		case 216: NO_MATCH_FOUND
		case 217:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-4-h.pdf"; break;
		case 218: NO_MATCH_FOUND
		case 219: NO_MATCH_FOUND
		case 220:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-7-h.pdf"; break;
		case 221: NO_MATCH_FOUND
		case 222:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-9-h.pdf"; break;
		case 223: NO_MATCH_FOUND
		case 224:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-11-h.pdf"; break;
		case 225: NO_MATCH_FOUND
		case 226:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-13-h.pdf"; break;
		case 227:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-14-h.pdf"; break;
		case 228:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-15-h.pdf"; break;
		case 229:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-16-h.pdf"; break;
		case 230:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-17-h.pdf"; break;
		case 231:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-18-h.pdf"; break;
		case 232:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-19-h.pdf"; break;
		case 233:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-20-h.pdf"; break;
		case 234:  return "https://corbettmaths.files.wordpress.com/2016/10/august-21-h.pdf"; break;
		case 235:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-22-h.pdf"; break;
		case 236:  return "https://corbettmaths.files.wordpress.com/2016/10/august-23-h.pdf"; break;
		case 237:  return "https://corbettmaths.files.wordpress.com/2016/10/august-24-h.pdf"; break;
		case 238:  return "https://corbettmaths.files.wordpress.com/2016/10/august-25-h.pdf"; break;
		case 239:  return "https://corbettmaths.files.wordpress.com/2016/10/august-26-h.pdf"; break;
		case 240:  return "https://corbettmaths.files.wordpress.com/2016/10/august-27-h.pdf"; break;
		case 241:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-28-h.pdf"; break;
		case 242:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-29-h.pdf"; break;
		case 243:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-30-h.pdf"; break;
		case 244:  return "https://corbettmaths.files.wordpress.com/2016/10/aug-31-h.pdf"; break;
		case 245:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-1-h.pdf"; break;
		case 246:  return "https://corbettmaths.files.wordpress.com/2016/08/scan-2017-8-24-13-53-43.pdf"; break;
		case 247:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-3-h.pdf"; break;
		case 248:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-4-h.pdf"; break;
		case 249:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-5-h.pdf"; break;
		case 250:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-6-h.pdf"; break;
		case 251:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-7-h.pdf"; break;
		case 252:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-8-h.pdf"; break;
		case 253:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-9-h.pdf"; break;
		case 254:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-10-h.pdf"; break;
		case 255:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-11-h.pdf"; break;
		case 256:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-12-h.pdf"; break;
		case 257:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-13-h.pdf"; break;
		case 258:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-14-h.pdf"; break;
		case 259:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-15-h.pdf"; break;
		case 260:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-16-h.pdf"; break;
		case 261:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-17-h.pdf"; break;
		case 262:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-18-h.pdf"; break;
		case 263:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-19-h.pdf"; break;
		case 264:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-20-h.pdf"; break;
		case 265:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-21-h.pdf"; break;
		case 266:  return "https://corbettmaths.files.wordpress.com/2016/10/sept-22-h.pdf"; break;
		case 267:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-23-h.pdf"; break;
		case 268:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-24-h.pdf"; break;
		case 269:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-25-h.pdf"; break;
		case 270:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-26-h.pdf"; break;
		case 271:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-27-h.pdf"; break;
		case 272:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-28-h.pdf"; break;
		case 273:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-29-h.pdf"; break;
		case 274:  return "https://corbettmaths.files.wordpress.com/2016/08/sept-30-h.pdf"; break;
		case 275:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-1-h.pdf"; break;
		case 276:  return "https://corbettmaths.files.wordpress.com/2016/08/oct-2-h.pdf"; break;
		case 277:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-3-h.pdf"; break;
		case 278:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-4-h.pdf"; break;
		case 279:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-5-h.pdf"; break;
		case 280:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-6-h.pdf"; break;
		case 281:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-7-h.pdf"; break;
		case 282:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-8-h.pdf"; break;
		case 283:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-9-h.pdf"; break;
		case 284:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-10-h.pdf"; break;
		case 285:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-11-h.pdf"; break;
		case 286:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-12-h.pdf"; break;
		case 287:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-13-h.pdf"; break;
		case 288:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-14-h.pdf"; break;
		case 289:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-15-h.pdf"; break;
		case 290:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-16-h.pdf"; break;
		case 291:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-17-h.pdf"; break;
		case 292:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-18-h.pdf"; break;
		case 293:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-19-h.pdf"; break;
		case 294:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-20-h.pdf"; break;
		case 295:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-21-h.pdf"; break;
		case 296:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-22-h.pdf"; break;
		case 297:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-23-h.pdf"; break;
		case 298:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-24-h.pdf"; break;
		case 299:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-25-h.pdf"; break;
		case 300:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-26-h.pdf"; break;
		case 301:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-27-h.pdf"; break;
		case 302:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-28-h.pdf"; break;
		case 303:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-29-h.pdf"; break;
		case 304:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-30-h.pdf"; break;
		case 305:  return "https://corbettmaths.files.wordpress.com/2016/10/oct-31-h.pdf"; break;
		case 306:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-1-h.pdf"; break;
		case 307:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-2-h.pdf"; break;
		case 308:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-3-h.pdf"; break;
		case 309:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-4-h.pdf"; break;
		case 310:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-5-h.pdf"; break;
		case 311:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-6-h.pdf"; break;
		case 312:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-7-h.pdf"; break;
		case 313:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-8-h.pdf"; break;
		case 314:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-9-h.pdf"; break;
		case 315:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-10-h.pdf"; break;
		case 316:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-11-h.pdf"; break;
		case 317:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-12-h.pdf"; break;
		case 318:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-13-h.pdf"; break;
		case 319:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-14-h.pdf"; break;
		case 320:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-15-h.pdf"; break;
		case 321:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-16-h.pdf"; break;
		case 322:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-17-h.pdf"; break;
		case 323:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-18-h.pdf"; break;
		case 324:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-19-h.pdf"; break;
		case 325:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-20-h.pdf"; break;
		case 326:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-21-h.pdf"; break;
		case 327:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-22-h.pdf"; break;
		case 328:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-23-h.pdf"; break;
		case 329:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-24-h.pdf"; break;
		case 330:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-25-h.pdf"; break;
		case 331:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-26-h.pdf"; break;
		case 332:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-27-h.pdf"; break;
		case 333:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-28-h.pdf"; break;
		case 334:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-29-h.pdf"; break;
		case 335:  return "https://corbettmaths.files.wordpress.com/2016/10/nov-30-h.pdf"; break;
		case 336:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-1-h.pdf"; break;
		case 337:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-2-h.pdf"; break;
		case 338:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-3-h.pdf"; break;
		case 339: NO_MATCH_FOUND
		case 340:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-5-h.pdf"; break;
		case 341:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-6-h.pdf"; break;
		case 342:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-7-h.pdf"; break;
		case 343:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-8-h.pdf"; break;
		case 344:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-9-h.pdf"; break;
		case 345:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-10-h.pdf"; break;
		case 346:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-11-h.pdf"; break;
		case 347:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-12-h.pdf"; break;
		case 348:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-13-h.pdf"; break;
		case 349:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-14-h.pdf"; break;
		case 350:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-15-h.pdf"; break;
		case 351:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-16-h.pdf"; break;
		case 352:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-17-h.pdf"; break;
		case 353:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-18-h.pdf"; break;
		case 354:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-19-h.pdf"; break;
		case 355:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-20-h.pdf"; break;
		case 356:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-21-h.pdf"; break;
		case 357:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-22-h.pdf"; break;
		case 358:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-23-h.pdf"; break;
		case 359:  return "https://corbettmaths.files.wordpress.com/2016/10/dec-24-h.pdf"; break;
		case 360:  return "https://corbettmaths.files.wordpress.com/2015/09/dec-25-h-answers.pdf"; break;
		case 361:  return "https://corbettmaths.files.wordpress.com/2015/09/dec-26-h-answers.pdf"; break;
		case 362:  return "https://corbettmaths.files.wordpress.com/2015/09/dec-27-h-answers.pdf"; break;
		case 363:  return "https://corbettmaths.files.wordpress.com/2015/09/dec-28-h-answers.pdf"; break;
		case 364:  return "https://corbettmaths.files.wordpress.com/2015/09/dec-29-h-answers.pdf"; break;
		case 365:  return "https://corbettmaths.files.wordpress.com/2015/09/dec-30-h-answers.pdf"; break;
		case 366:  return "https://corbettmaths.files.wordpress.com/2015/09/dec-31-h-answers.pdf"; break;


	};
}