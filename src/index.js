module.exports = function check(str, brConfig) {
	let strArr = str.split('');
	for ( let i = 0; i < brConfig.length; i++ ) {
		for ( let j = 0; j < strArr.length; j++ ) {
			if ( brConfig[i][0] == strArr[j] && strArr[j + 1] == brConfig[i][1] ) {
				strArr.splice(j, 2);
				i = 0;	
				j = -1;
			}
		}
	}
  return strArr.length != 0 ? false : true
}