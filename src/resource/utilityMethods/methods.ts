
type MapType = {
    [id: string]: any;
}

export const methodData: MapType = {}
let code: MapType = {};
code["java"] = `/**
* This method takes in a valid email address string and returns a masked version of it.
* 
* @param emailID A valid email address string
* @return A masked version of the input email address
*/
public static String getMaskedEmailID(final String emailID )
   {
       StringBuilder email = new StringBuilder(emailID);
       int j = email.indexOf( "@" );
       for ( int i = 1; i < j; i = i + 2 )
       {
           email.setCharAt( i, 'X' );
       }
       return email.toString();
   }`;
code["py"] = `def getMaskedEmailID( emailID ): 
  
# Initializing string to empty 
email = ""

# Length of the email 
j = len( emailID ) 

# Iterating the loop 
for i in range( 0, j ): 
    # Checking the index 
    if i % 2 == 0: 
        # Checking the character 
        if emailID[i]!='@': 
            # Appending the character 
            email = email + emailID[i] 
        else: 
            # Appending the character 
            email = email + emailID[i] 
    else: 
        # Appending character 
        email = email + 'X'

# Returning the email 
return email `;
code["js"] = `function getMaskedEmailID(emailID) {
    let email = emailID.split('');
    let atIndex = email.indexOf('@');
    for (let i = 1; i < atIndex; i += 2) {
      email[i] = 'X';
    }
    return email.join('');
  }`;
code["go"] = `func GetMaskedEmailID(emailID string) string {
    email := []rune(emailID)
    j := strings.Index(emailID, "@")
    for i := 1; i < j; i = i + 2 {
            email[i] = 'X'
    }
    return string(email)
}`;
methodData["Masked-Email-Generator"] = {
    "Name": "Masked Email Generator",
    "Description": "This method takes in a valid email address string and returns a masked version of it. This Utility takes emailId as input and returns MaskedEmailId.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "getMaskedEmailID",
    "Code": code
};
code = {};
code["java"] = `/**
* Gets a masked version of a given mobile number.
* @param mobileNo The mobile number to be masked.
* @return A string containing a masked version of the mobile number.
*/
public static String getMaskedMobileNo(final String mobileNo )
   {
       StringBuilder mobile = new StringBuilder(mobileNo);
       Integer[] index =
       { 2, 3, 5, 6, 7 };
       for ( int i = 0; i < index.length; i++ )
       {
           mobile.setCharAt( index[i], 'X' );
       }
       return mobile.toString();
   }`;
code["py"] = `def getMaskedMobileNo(mobileNo):
mobile = list(mobileNo)
index = [2, 3, 5, 6, 7]
for i in index:
    mobile[i] = 'X'
return ''.join(mobile)`;
code["js"] = `function getMaskedMobileNo(mobileNo) {
                 let index = [2, 3, 5, 6, 7];
                 let mobile = mobileNo.split('');
                 for (let i = 0; i < index.length; i++) {
                    mobile[index[i]] = 'X';
                }
                return mobile.join('');
            }`;
code["go"] = `
func getMaskedMobileNo(mobileNo string) string {
        mobile := []rune(mobileNo)
        index := []int{2, 3, 5, 6, 7}
        for i := 0; i < len(index); i++ {
                mobile[index[i]] = 'X'
        }
        return string(mobile)
}`;
methodData["Masked-Mobile-Number-Generator"] = {
    "Name": "Masked Mobile Number Generator",
    "Description": "Gets a masked version of a given mobile number. This Utility takes mobile number as input and returns masked Mobile no .",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "getMaskedMobileNo",
    "Code": code
};
code = {};
code["java"] = `/**
* Determines whether the given object is not null.
* 
* @param obj the object to check for nullness
* @return true if the object is not null, false otherwise
*/
public static boolean isValid(final Object obj) {
 return Objects.nonNull(obj);
}
public boolean isValid(Object obj) {
 return obj != null;
}`;
code["py"] = `def isValid(obj):
return obj is not None`;
code["js"] = `function isValid(obj) {
    return typeof obj !== "undefined" && obj !== null;
  }`;
code["go"] = `func isValid(obj interface{}) bool {
    return obj != nil
}`;
methodData["Null-Object-Checker"] = {
    "Name": "Null Object Checker",
    "Description": "Determines whether the given object is not null.You can use this utility method  to check if object is null. This utility will help you in maintaining the object nullablity check throught out the product",
    "No of Input Box": 0,
    "No of OutputBox": 0,
    "JS method name": "",
    "Code": code
};
code = {};
code["java"] = `/**
* Determines whether the given string is empty or null.
* 
* @param str the string to check for emptiness
* @return true if the string is empty or null, false otherwise
*/
public static boolean isEmpty(final String str )
   {
       if ( ( str == null ) || ( str.trim().length() == 0 ))
       {
           return true;
       }
       else
       {
           return false;
       }
   }`;
code["py"] = `
def is_empty(str):
    if str == None or len(str.strip()) == 0:
        return True
    else:
        return False`;
code["js"] = `function isEmpty(str) {
    if (str === null || str.trim().length === 0) {
      return true;
    } else {
      return false;
    }
  }`;
code["go"] = `func IsEmpty(str string) bool {
    if str == "" || len(strings.TrimSpace(str)) == 0 {
            return true
    }
    return false
}`;
methodData["String-Validity-Checker"] = {
    "Name": "String Validity Checker",
    "Description": "Determines whether the given string is empty or null.You can use this utility code to check if the string is empty. This method will accept the string as an input and return the output in boolean format.",
    "No of Input Box": 0,
    "No of OutputBox": 0,
    "JS method name": "",
    "Code": code
};
code = {};
code["java"] = `/**

* This method returns a substring of the original string, as specified by the start and end indexes.
*  @param originalString the original string from which the substring will be extracted
*  @param startIndex the starting index (inclusive) of the substring
*  @param endIndex the ending index (exclusive) of the substring
*  @return the substring of the original string between the start and end indexes, or an empty string if the input is invalid.
*/
public static String getSubString(final String originalString,final Integer startIndex,final Integer endIndex )
  {
      String result = "";
      if ( originalString != null && !originalString.isEmpty() && startIndex >= 0 && endIndex > startIndex )
      {
          if ( endIndex <= originalString.length() )
          {
              result = originalString.substring( startIndex, endIndex );
          }
          else
          {
              result = "";
          }
      }
      return result;
  }`;
code["py"] = `def getSubString(originalString, startIndex, endIndex):
result = ""
if originalString and startIndex >= 0 and endIndex > startIndex:
    if endIndex <= len(originalString):
        result = originalString[startIndex:endIndex]
    else:
        result = ""
return result`;
code["js"] = `function getSubString(originalString, startIndex, endIndex) {
    let result = "";
    if (originalString != null && originalString.length > 0 && startIndex >= 0 && endIndex > startIndex) {
      if (endIndex <= originalString.length) {
        result = originalString.substring(startIndex, endIndex);
      } else {
        result = "";
      }
    }
    return result;
  }`;
code["go"] = `func getSubString(originalString string, startIndex int, endIndex int) string{
    result := ""
    if originalString != "" && startIndex >= 0 && endIndex > startIndex{
            if endIndex <= len(originalString){
                    result = originalString[startIndex:endIndex]
            }else{
                    result = ""
            }
    }
    return result
}`;
methodData["Substring-Extractor"] = {
    "Name": "Substring-Extractor",
    "Description": "This method returns a substring of the original string, as specified by the start and end indexes.You can use this utility to get a required substring on the basis of index from a given String. This method will accept 3 input paramters, Original string, Start of the Index and End of the Index",
    "No of Input Box": 3,
    "No of OutputBox": 1,
    "JS method name": "getSubString",
    "Code": code
};
code = {};
code["java"] = `/**
* Checks if a given email address is valid.
* 
* @param emailAddress email address to check
* @return true if the given email address is valid, false otherwise
*/
public static boolean isValidEmailID(String email) {
               String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\." +
                       "[a-zA-Z0-9_+&*-]+)*@" +
                       "(?:[a-zA-Z0-9-]+\\.)+[a-z" +
                       "A-Z]{2,7}$";

               Pattern pat = Pattern.compile(emailRegex);
               if (email == null)
                   return false;
               return pat.matcher(email).matches();
           }`;
code["py"] = `def check_email_validity(emailAddress):
if '@' in emailAddress:
    return True
else:
    return False`;
code["js"] = `function isValidEmailID(emailAddress) {
    // pattern for email regex
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailAddress && emailAddress.length > 0){
      return emailPattern.test(emailAddress);
    } else {
      return false;
    }
  }`;
code["go"] = `func isValidEmailID(emailAddress string) (bool) {
    isValid := false
    if emailAddress != "" {
            if strings.Index(emailAddress, "@") > -1 && strings.Index(emailAddress, ".") > -1 {
                    isValid = true
            }
    }
    return isValid
}`;
methodData["Email-Verifier"] = {
    "Name": "Email Verifier",
    "Description": "Checks if a given email address is valid. This utility takes email address as input and returns boolean response after checking if email address is valid.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "isValidEmailID",
    "Code": code
};
code = {};
code["java"] = `/**
* This method checks if a given String is within a valid length range.
* 
* @param inputString The String to check.
* @param minLength The minimum length of the String.
* @param maxLength The maximum length of the String.
* 
* @return True if the String is within the valid length range, false otherwise.
*/ 
public static boolean isValidLength(final String inputString,final Integer minLength,final Integer maxLength )
   {
       final int inputStringLength = inputString.length();
       if ( inputStringLength < minLength || inputStringLength > maxLength )
           return false;
       else
           return true;
   }`;
code["py"] = `def is_valid_length(input_string, min_length, max_length):
input_string_length = len(input_string)
if input_string_length < min_length or input_string_length > max_length:
  return False
else:
  return True`;
code["js"] = `function isValidLength(inputString, minLength, maxLength) {
    return inputString.length >= minLength && inputString.length <= maxLength ? true : false;
  }`;
code["go"] = `func isValidLength(inputString string, minLength, maxLength int) bool {
    inputStringLength := len(inputString)
    if inputStringLength < minLength || inputStringLength > maxLength {
            return false
    }
    return true
}`;
methodData["String-Length-Validator"] = {
    "Name": "String Length Validator",
    "Description": "This method checks if a given String is within a valid length range.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "isValidLength",
    "Code": code
};
code = {};
code["java"] = `/**
* Checks if a given mobile number is valid.
* @param inMobile The mobile number to check.
* @return true if the mobile number is valid, false otherwise.
*/
public static boolean isValidMobile(final String inMobile )
   {
       Pattern pattern = Pattern.compile( "[6-9][0-9]{9}" );
       Matcher matcher = pattern.matcher( inMobile );
       if ( matcher.matches() )
       {
           return true;
       }
       else
       {
           return false;
       }
   }`;
code["py"] = `
def valid_mobile( mobile ):

pattern = re.compile("[6-9][0-9]{9}")
matcher = pattern.match(mobile)
if(matcher):
    return True
else:
    return False`;
code["js"] = `exports.isValidMobile=function(inMobile){
    var pattern = new RegExp(/^[6-9][0-9]{9}$/);
    if(pattern.test(inMobile)){
      return true;
    }
    else{
      return false;
    }
  }`;
code["go"] = `func IsValidMobile(inMobile string) bool {
    pattern := regexp.MustCompile("[6-9][0-9]{9}")
    matcher := pattern.MatchString(inMobile)
    if matcher {
        return true
    } else {
        return false
    }
}`;
methodData["Mobile-Number-Validator"] = {
    "Name": "Mobile Number Validator",
    "Description": "Checks if a given mobile number is valid. This Utility takes string as input and then validates string according to valid mobileNumber.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "isValidMobile",
    "Code": code
};
code = {};
code["java"] = `/**
* Checks if the provided String is a valid PIN code.
* 
* @param inStr The String to check if it is a valid PIN code 
* @return true if the String is a valid PIN code, false otherwise
*/
public static boolean isValidPinCode( final String inStr )
   {
       final String str = inStr.trim();
       final String rule = "[0-9]{6}$";
       final Pattern pattern = Pattern.compile( rule );
       final Matcher matcher = pattern.matcher( str );
       if ( matcher.matches() )
           return true;
       else
           return false;
   }`;
code["py"] = `def isValidPinCode(inStr):
str = inStr.strip()
rule = "[0-9]{6}$"
pattern = re.compile(rule)
matcher = re.match(pattern, str)
if matcher:
    return True
else:
    return False`;
code["js"] = `const isValidPinCode = inStr => {
    const str = inStr.trim();
    const rule = '[0-9]{6}$';
    const pattern = new RegExp(rule);
    const matcher = pattern.exec(str);
    if (matcher) {
        return true;
    } else {
        return false;
    }
};`;
code["go"] = `func isValidPinCode(inStr string) bool {
    str := strings.TrimSpace(inStr)
    rule := "[0-9]{6}$"
    pattern := regexp.MustCompile(rule)
    matcher := pattern.MatchString(str)

    if matcher {
            return true
    } else {
            return false
    }
}`;
methodData["PIN-code-Validator"] = {
    "Name": "PIN code Validator",
    "Description": "Checks if the provided String is a valid PIN code. This Utility takes string as input and then validates string according to valid pincode.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "isValidPinCode",
    "Code": code
};
code["java"] = `/**
* This method takes in an array of strings and returns a single string with each element of the array,
* separated by a comma.
* 
* @param str The array of strings to be converted.
* @return A single string with each element of the array, separated by a comma.
*/
public static String arrayToStringWithComma( final String str[] )
           {
                String arrayToString = String.join(", ", str);
                return arrayToString;
           }`;
code["py"] = `def array_to_string_with_comma(str):
processed_string = ",".join(str)
processed_string = "{},".format(processed_string)
return processed_string`;
code["js"] = `function arrayToStringWithComma(str) {
    let processedString = "";
    processedString = str.toString().replace("[", "").replace("]", "").replace(" ", "");
    processedString = "" + processedString + ",";
    return processedString;
}
`;
code["go"] = `func arrayToStringWithComma(str []string) string {
    processedString := ""
    processedString = strings.Replace(strings.Replace(strings.Replace(strings.Trim(fmt.Sprint(str), "[]"), "[", ""), "]", ""), " ", "", -1)
    processedString = "," + processedString + ","
    return processedString
}`;
methodData["String-Combiner"] = {
    "Name": "String Combiner",
    "Description": "This method takes in an array of strings and returns a single string with each element of the array, separated by a comma. ",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "arrayToStringWithComma",
    "Code": code
};
code = {};
code["java"] = `/**
* Converts a String of comma separated values into a String array.
* 
* @param str the String to be converted
* @return a String array containing the values from the comma separated String
*/
public static String[] commaStringToArray(final String str )
   {
       String[] arrayOfString = str.split( ", " );
       return arrayOfString;
   }`;
code["py"] = `def comma_string_to_list(str):
return str.split(', ')`;
code["js"] = `function commaStringToArray(str) {
    var arrayOfString = str.split(', ');
    return arrayOfString;
}`;
code["go"] = `func CommaStringToArray(str string) []string {
    arrayOfString := strings.Split(str, ", ")
    return arrayOfString
}`;
methodData["String-Splitter"] = {
    "Name": "String Splitter",
    "Description": "Converts a String of comma separated values into a String array. This Utility takes String as input and converts it into array of string. ",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "commaStringToArray",
    "Code": code
};
code = {};
code["java"] = `/**
* Checks if a string is numeric.
* @param str The string to check.
* @return true if the string contains only digits, false otherwise.
*/
public static boolean isNumeric(final String str )
   {
       return str.matches( "-?\\d+(\\.\\d+)?" );
   }`;
code["py"] = `
def isNumeric(str):
    return str.matches("-?\d+(\.\d+)?")`;
code["js"] = `    
function isNumeric(str) {
    return /^-?\d+(\.\d+)?$/.test(str);
}`;
code["go"] = `func isNumeric(str string) bool {
    _, err := strconv.ParseFloat(str, 64)
    return err == nil
}`;
methodData["Numeric-Verifier"] = {
    "Name": "Numeric Verifier",
    "Description": "Checks if a string is numeric. This Utility takes String  as an input and returns true if string only consist of number .",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "isNumeric",
    "Code": code
};
code = {};
code["java"] = `/**
* This method returns the current financial year.
* 
* @return An int representing the current financial year.
*/
public static int getCurrentFinancialYear()
   {
       Calendar calendar = Calendar.getInstance();
       int currentMonth = calendar.get( Calendar.MONTH ) + 1;
       int currentYear = calendar.get( Calendar.YEAR );
       if ( currentMonth > 3 )
       {
           return currentYear;
       }
       else
       {
           return currentYear - 1;
       }
   }`;
code["py"] = `def get_current_financial_year():
current_date = datetime.date.today()
current_month = current_date.month
current_year = current_date.year
if current_month > 3:
    return current_year
else:
    return current_year-1`;
code["js"] = `exports.getCurrentFinancialYear=function(){
    let currentDate=new Date();
    let currentMonth=currentDate.getMonth()+1;
    let currentYear=currentDate.getFullYear();
    if(currentMonth>3){
        return currentYear;
    }
    else{
        return currentYear-1;
    }
}`;
code["go"] = `current month
func GetCurrentFinancialYear() int {
        currentMonth := time.Now().Month()
        currentYear := time.Now().Year()
        if currentMonth > 3 {
                return currentYear
        }
        return currentYear - 1
}`;
methodData["Financial-Year-Returner"] = {
    "Name": "Financial Year Returner",
    "Description": "This method returns the current financial year.",
    "No of Input Box": 0,
    "No of OutputBox": 1,
    "JS method name": "getCurrentFinancialYear",
    "Code": code
};
code = {};
code["java"] = `/**
* Returns the previous financial year as an integer.
* 
* @return an integer representing the previous financial year
*/   
public static int getPreviousFinancialYear()
   {
       Calendar calendar = Calendar.getInstance();
       int currentMonth = calendar.get( Calendar.MONTH ) + 1;
       int currentYear = calendar.get( Calendar.YEAR );
       if ( currentMonth > 3 )
       {
           return currentYear - 1;
       }
       else
       {
           return currentYear - 2;
       }
   }`;
code["py"] = `def get_previous_financial_year():
current_year = datetime.date.today().year
current_month = datetime.date.today().month
if current_month > 3:
   previous_year = current_year - 1
   return previous_year
else:
   previous_year = current_year - 2
   return previous_year`;
code["js"] = `module.exports = {
    getPreviousFinancialYear : function() {
      let currentMonth = new Date().getMonth() + 1;
      let currentYear = new Date().getFullYear();
      if (currentMonth > 3) {
        return currentYear - 1;
      } else {
        return currentYear - 2;
      }
    }
  };`;
code["go"] = `func getPreviousFinancialYear() int {
    currentMonth := time.Now().Month()
    currentYear := time.Now().Year()
    if int(currentMonth) > 3 {
            return currentYear - 1
    } else {
            return currentYear - 2
    }
}`;
methodData["Previous-Financial-Year-Returner"] = {
    "Name": "Previous Financial Year Returner",
    "Description": "Returns the previous financial year as an integer.",
    "No of Input Box": 0,
    "No of OutputBox": 1,
    "JS method name": "getPreviousFinancialYear",
    "Code": code
};
code = {};
code["java"] = `/**
* Gets the name of the month for a given Date
* @param date the Date to get the month from
* @return the name of the month (i.e. "January")
*
public static String getMonthName( final Date date )
   {
       Calendar calendar = Calendar.getInstance();
       calendar.setTime( date );
       int month = calendar.get( Calendar.MONTH );
       String[] months =
       { "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November",
         "December" };
       return months[month];
   }`;
code["py"] = `def getMonthName(date): 
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 
month = date.month - 1
return months[month] `;
code["js"] = `    const getMonthName = (date) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = new Date(date).getMonth();
    return months[month];
}`;
code["go"] = `func GetMonthName(date time.Time) string {
    months := []string{
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
    }
    month := date.Month()
    return months[month-1]
}`;
methodData["Month-Name-Generator"] = {
    "Name": "Month Name Generator",
    "Description": "This Utility takes date as an input and it returns name of month.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "getMonthName",
    "Code": code
};
code = {};
code["java"] = `/**
* This static method returns the start of the month for the given date.
* 
* @param date The date for which to retrieve the start of the month.
* @return A Date object containing the start of the month for the given date.
*/
public static Date getStartOfMonth( final Date date )
   {
       Calendar calendar = Calendar.getInstance();
       calendar.setTime( date );
       calendar.set( Calendar.DAY_OF_MONTH, 1 );
       calendar.set( Calendar.HOUR_OF_DAY, 0 );
       calendar.set( Calendar.MINUTE, 0 );
       calendar.set( Calendar.SECOND, 0 );
       calendar.set( Calendar.MILLISECOND, 0 );
       return calendar.getTime();
   }`;
code["py"] = `def get_start_of_month(date):
return date.replace(day=1)`;
code["js"] = `const getStartOfMonth = date => {
    let calendar = new Date(date);
    calendar.setDate(1);
    calendar.setHours(0);
    calendar.setMinutes(0);
    calendar.setSeconds(0);
    calendar.setMilliseconds(0);
    return calendar;
    };`;
code["go"] = `func GetStartOfMonth(date time.Time) time.Time{
    date = date.AddDate(0, 0, -date.Day() + 1)
    date = date.Truncate(time.Hour * 24)
    return date
}`;
methodData["Month-Start-Finder"] = {
    "Name": "Month Start Finder",
    "Description": "This Utility takes date as an input and it returns first day of month.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "",
    "Code": code
};
code = {};
code["java"] = `/**
* Sets the current time for the given Calendar object.
* @param inCal The Calendar object whose time is to be set.
*/    
public static void setCurrentTimeInCalenderObject( Calendar inCal )
    {
        Calendar cal = Calendar.getInstance();
        inCal.set( Calendar.HOUR_OF_DAY, cal.get( Calendar.HOUR_OF_DAY ) );
        inCal.set( Calendar.MINUTE, cal.get( Calendar.MINUTE ) );
        inCal.set( Calendar.SECOND, cal.get( Calendar.SECOND ) );
        inCal.set( Calendar.MILLISECOND, cal.get( Calendar.MILLISECOND ) );
    }`;
code["py"] = `def set_time(inCal):
inCal.now()`;
code["js"] = ` function setCurrentTimeInCalenderObject(inCal) {
    var cal = new Date();
    inCal.setHours(cal.getHours());
    inCal.setMinutes(cal.getMinutes());
    inCal.setSeconds(cal.getSeconds());
    inCal.setMilliseconds(cal.getMilliseconds());
}`;
code["go"] = `func SetCurrentTimeInCalenderObject(inCal *time.Time) {
    now := time.Now()
    inCal.SetHour(now.Hour())
    inCal.SetMinute(now.Minute())
    inCal.SetSecond(now.Second())
    inCal.SetMillisecond(now.Millisecond())
}`;
methodData["Current-time-Setter"] = {
    "Name": "Current time Setter",
    "Description": "Sets the current time for the given Calendar object.",
    "No of Input Box": 0,
    "No of OutputBox": 0,
    "JS method name": "",
    "Code": code
};
code = {};
code["java"] = `/**
* Returns a Calendar object from a specified date and format.
*
* @param inDate The date as a string
* @param inFormat The format used for the date string
* @return A Calendar object representation of the date
*/
public static Calendar getDateFromStringType(final String inDate,final String inFormat) {
               Calendar cal = Calendar.getInstance();
               if (StringUtils.isBlank(inDate)) {
                       return null;
               } else {
                       try {
                               final SimpleDateFormat dateFormat = new SimpleDateFormat(inFormat);
                               cal.setTime(dateFormat.parse(inDate));
                       } catch (Exception ex) {
                               logger.error("Exception", ex);
                       }
               }
               return cal;
       }`;
code["py"] = `def get_calendar_from_date(inDate, inFormat):
date_object = datetime.strptime(inDate, inFormat)
return date_object`;
code["js"] = ` function getDateFromStringType(inDate,inFormat) {
    var cal = new Date();
    if (StringUtils.isBlank(inDate)) {
        return null;
    } else {
        try {
            var dateFormat = new Intl.DateTimeFormat(inFormat);
            cal.setTime(dateFormat.parse(inDate));
        } catch (ex) {
            console.error("Exception", ex);
        }
    }
    return cal;
}`;
code["go"] = `func GetDateFromStringType(inDate, inFormat string) *time.Time {
    cal := time.Now()
    if len(inDate) == 0 {
            return nil
    } else {
            dateFormat, err := time.Parse(inFormat, inDate)
            if err != nil {
                    log.Error("Error while parsing date", err)
                    return nil
            }
            cal = dateFormat
    }
    return &cal
}`;
methodData["Calendar-Formatter"] = {
    "Name": "Calendar Formatter",
    "Description": "Returns a Calendar object from a specified date and format. This Utility takes date in string and format in string as an input and returns formatted date.",
    "No of Input Box": 0,
    "No of OutputBox": 0,
    "JS method name": "",
    "Code": code
};
code = {};
code["java"] = `/**
* Returns a formatted date string from a given date string.
* @param inDate The date string to be formatted
* @param srcFormat The format of the inDate string
* @param destFormat The desired format of the output string
* @return A String representing the formatted date
*/        
public static String getFormattedDateInString(final String inDate, final String srcFormat, final String destFormat) {
                Calendar cal = getDate(inDate, srcFormat);
                if (StringUtils.isValidObj(cal)) {
                        final SimpleDateFormat dateFormat = new SimpleDateFormat(destFormat);
                        return dateFormat.format(cal.getTime());
                }
                return null;
        }`;
code["py"] = `
def formatDate(inDate, srcFormat, destFormat):
    date_obj = datetime.strptime(inDate, srcFormat)
    return date_obj.strftime(destFormat)`;
code["js"] = `function formatDateString(inDate, srcFormat, destFormat) {
    let date = moment(inDate, srcFormat);
    if(date.isValid()){
        return date.format(destFormat);
    }
    else {
        console.log("Invalid date provided or invalid date format")
    }
}`;
code["go"] = `func getFormattedDateInString(inDate string, srcFormat string, destFormat string) string {
    cal := getDate(inDate, srcFormat)
    if (StringUtils.isValidObj(cal)) {
            dateFormat := time.New(destFormat)
            return dateFormat.Format(cal.GetTime())
    }
    return nil
}`;
methodData["Date-Generator"] = {
    "Name": "Date Generator",
    "Description": "Returns a formatted date string from a given date string.",
    "No of Input Box": 0,
    "No of OutputBox": 0,
    "JS method name": "getFormattedDateInString",
    "Code": code
};
code = {};
code["java"] = `/**
* Calculates the difference in hours between two dates.
* 
* @param startDate The start date.
* @param endDate The end date.
* @return The difference in hours between the two dates. 
*/
public static long differenceInHour(final Date startDate,final Date endDate) {
               long hourDiff = 0;
               long diff = 0;
               try {
                       diff = endDate.getTime() - startDate.getTime();
                       hourDiff = diff / (60 * 60 * 1000);
               } catch (Exception ex) {
                       logger.warn("Error in date diff" + ex);
               }
               return hourDiff;
       }`;
code["py"] = `
def dateDifferenceInHours(startDate, endDate):
    start_datetime = datetime.strptime(startDate, "%Y-%m-%d %H:%M:%S")
    end_datetime = datetime.strptime(endDate, "%Y-%m-%d %H:%M:%S")
    diff = end_datetime - start_datetime
    return diff.total_seconds() / 3600`;
code["js"] = ` const differenceInHour = (startDate, endDate) => {
    let hourDiff = 0;
    let diff = 0;
    try {
            diff = endDate.getTime() - startDate.getTime();
            hourDiff = diff / (60 * 60 * 1000);
    } catch (ex) {
            console.log("Error in date diff" + ex);
    }
    return hourDiff;
}`;
code["go"] = `
func differenceInHour(startDate, endDate time.Time) int64 {
        hourDiff := int64(0)
        diff := int64(0)
        diff = endDate.Unix() - startDate.Unix()
        hourDiff = diff / (60 * 60)
        return hourDiff
}`;
methodData["Hour-Difference-Calculator"] = {
    "Name": "Hour Difference Calculator",
    "Description": "Calculates the difference in hours between two dates. This Utility takes Start date and end date as input and gives number of hours between them as an output. ",
    "No of Input Box": 2,
    "No of OutputBox": 1,
    "JS method name": "differenceInHour",
    "Code": code
};
code = {};
code["java"] = `/**
* Calculates the difference between two date objects in minutes
* 
* @param startDate the start date
* @param endDate the end date
* @return the difference in minutes between the two specified dates
*/        
public static long differenceInMinutes(final Date startDate,final Date endDate) {
           long minDiff = 0;
           long diff = 0;
           try {
                   diff = endDate.getTime() - startDate.getTime();
                   minDiff = diff / (60 * 1000);
           } catch (Exception ex) {
           }
           return minDiff;
   }`;
code["py"] = `def dateDifferenceInMinutes(startDate, endDate):
start_datetime = datetime.strptime(startDate, "%Y-%m-%d %H:%M:%S")
end_datetime = datetime.strptime(endDate, "%Y-%m-%d %H:%M:%S")
diff = end_datetime - start_datetime
return diff.total_seconds() / 60`;
code["js"] = `
const diff = (startDate, endDate) => {
    const diffInMilliseconds = endDate.getTime() - startDate.getTime();
    return Math.floor(diffInMilliseconds / 60000);
}`;
code["go"] = `func DifferenceInMinutes(startDate, endDate time.Time) int64 {
    minDiff := int64(0)
    diff := int64(0)
    diff = endDate.Unix() - startDate.Unix()
    minDiff = diff / (60 * 1000)
    return minDiff
}`;
methodData["Minute-Difference-Calculator"] = {
    "Name": "Minute Difference Calculator",
    "Description": "Calculates the difference between two date objects in minutes. This Utility takes Start date and end date as input and gives number of mintues between them as an output. ",
    "No of Input Box": 2,
    "No of OutputBox": 1,
    "JS method name": "differenceInMinutes",
    "Code": code
};
code = {};
code["java"] = `/**
* Calculates the difference between two dates in days.
*
* @param startDate The start date.
* @param endDate The end date.
* @return The difference between two dates in days.
*/        
public static long dfferenceInDays(final Date startDate,final Date endDate) {
               long dayDiff = 0;
               long diff = 0;
               try {
                       diff = endDate.getTime() - startDate.getTime();
                       dayDiff = diff / (24 * 60 * 60 * 1000);
               } catch (Exception ex) {
                      //handle exception here
               }
               return dayDiff;
       }`;
code["py"] = `def dateDifferenceInDays(startDate, endDate):
    start_datetime = datetime.strptime(startDate, "%Y-%m-%d %H:%M:%S")
    end_datetime = datetime.strptime(endDate, "%Y-%m-%d %H:%M:%S")
    diff = end_datetime - start_datetime
    return diff.days`;
code["js"] = `function dfferenceInDays(startDate,endDate)
{
    let dayDiff = 0;
    let diff = 0;
    try 
    {
        diff = endDate.getTime() - startDate.getTime();
        dayDiff = diff / (24 * 60 * 60 * 1000);
    } 
    catch (ex) 
    {
       //handle exception here
    }
    return dayDiff;
}`;
code["go"] = `func differenceInDays(startDate, endDate time.Time) int64 {
    dayDiff := int64(0)
    diff := int64(0)

    diff = endDate.Unix() - startDate.Unix()
    dayDiff = diff / (24 * 60 * 60)

    return dayDiff
}`;
methodData["Day-Difference-Calculator"] = {
    "Name": "Day Difference Calculator.",
    "Description": "Calculates the difference between two dates in days. This Utility takes Start date and end date as input and gives number of days between them as an output. ",
    "No of Input Box": 2,
    "No of OutputBox": 1,
    "JS method name": "differenceInDays",
    "Code": code
};

code = {};
code["java"] = `/**
* Returns the current date in a specified format.
* 
* @param inFormat The format in which the current date should be returned.
* @return The current date in the specified format.
*/        
public static String getCurrentDateInGivenFormat(final DateFormat inFormat) {
               Date today = Calendar.getInstance().getTime();
               String currDate = inFormat.format(today);
               return currDate;
       }`;
code["py"] = `
def getCurrentDate(inFormat):
    current_datetime = datetime.now()
    return current_datetime.strftime(inFormat)
`;
code["js"] = `function getCurrentDateInGivenFormat(inFormat) {
    let today = new Date();
    let currDate = inFormat.format(today);
    return currDate;
}`;
code["go"] = `
func getCurrentDateInGivenFormat(inFormat string) string {
        today := time.Now()
        currDate := today.Format(inFormat)
        return currDate
}`;
methodData["CurrentDate-to-Format-converter"] = {
    "Name": "CurrentDate to Format converter",
    "Description": "This Utility takes DateFormat as input and converts Current date into desired format.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "getCurrentDateInGivenFormat",
    "Code": code
};

code = {};
code["java"] = `/**
* Gets the week number of the year for the given LocalDate.
*
* @param date The LocalDate to find the week number of the year for
* @return The week number of the year for the given LocalDate
*/
public static int getWeekNumberOfYear(final LocalDate date) {
       WeekFields weekFields = WeekFields.of(Locale.getDefault());
       return date.get(weekFields.weekOfWeekBasedYear());
   }`;
code["py"] = `def get_week_number_of_year(date):
return date.isocalendar()[1]`;
code["js"] = `function getWeekNumber(date) {
    let startOfYear = new Date(date.getFullYear(), 0, 1);
    let diff = (date - startOfYear) + ((startOfYear.getDay() + 1) - date.getDay());
    return Math.ceil(diff / 86400000 / 7);
}`;
code["go"] = `func getWeekNumberOfYear(date time.Time) int {
    _, week := date.ISOWeek()
    return week
}`;
methodData["Week-Number-Finder"] = {
    "Name": "Week Number Finder",
    "Description": "Gets the week number of the year for the given Date.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "getWeekNumberOfYear",
    "Code": code
};

code = {};
code["java"] = `/**
* Gets the IP address of the server the application is running on.
* 
* @return The IP address of the server, or null if an unknown host exception is encountered.
*/    
public static String getServerIp()
   {
       InetAddress inetAddress = null;
       String ip = null;
       try
       {
           inetAddress = InetAddress.getLocalHost();
           ip = inetAddress.getHostAddress();
       }
       catch ( UnknownHostException ex )
       {
           //handle exception here
       }
       return ip;
   }`;
code["py"] = `def get_host_ip():
try:
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(('8.8.8.8', 80))
    ip = s.getsockname()[0]
finally:
    s.close()
return ip

print(get_host_ip())`;
code["js"] = `var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}`;
code["go"] = `func getServerIP() string {
    ip, err := net.LookupIP("localhost")
    if err != nil {
        log.Fatal(err)
    }
    for _, address := range ip {
        return address.String()
    }
    return ""
}`;
methodData["Server-IP-Address-Retriever"] = {
    "Name": "Server's IP Address Retriever",
    "Description": "Gets the IP address of the server the application is running on.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "differenceInMinutes",
    "Code": code
};

code = {};
code["java"] = `/**
* This method takes in a list of Strings and converts it to a single String.
*
* @param inDetails the List of Strings to be converted
* @return a single String with the list of Strings separated by a comma
*/
public static String convertListToString( final List<String> inDetails )
   {
       StringBuilder sb = new StringBuilder();
       String toReturn = null;
       if ( null != inDetails )
       {
           for ( String str : inDetails )
           {
               sb.append( str );
               sb.append( ", " );
           }
           if ( sb.lastIndexOf( ", " ) > 0 )
           {
               toReturn = sb.substring( 0, sb.lastIndexOf( ", " ) );
           }
       }
       return toReturn;
   }`;
code["py"] = `def convert_list_to_string(inDetails:List[str]) -> str:
return ','.join(inDetails)`;
code["js"] = `    function convertListToString(inDetails){
    let sb = "";
    let toReturn = null;
    if (inDetails !== null) {
        for (let str of inDetails) {
            sb += str + ", ";
        }
        if (sb.lastIndexOf(", ") > 0) {
            toReturn = sb.substring(0, sb.lastIndexOf(", "));
        }
    }
    return toReturn;
}`;
code["go"] = `func convertListToString(inDetails []string) string {
    var sb strings.Builder
    toReturn := ""
    if inDetails != nil {
            for _, str := range inDetails {
                    sb.WriteString(str)
                    sb.WriteString(", ")
            }
            if strings.LastIndex(sb.String(), ", ") > 0 {
                    toReturn = sb.String()[0 : strings.LastIndex(sb.String(), ", ")]
            }
    }
    return toReturn
}`;
methodData["List-To-String-Converter"] = {
    "Name": "List To String Converter",
    "Description": "This method takes in a list of Strings and converts it to a single String.",
    "No of Input Box": 1,
    "No of OutputBox": 1,
    "JS method name": "differenceInMinutes",
    "Code": code
};

code = {};
code["java"] = `/**
* Extracts the remote IP address of the client making the request.
*
* @param request The HttpServletRequest object that contains information about the client's request
* @return The IP address of the client as a string
*/
public static String extractRemoteIpAddress( final HttpServletRequest request )
   {
       String remoteAddr = request.getHeader( "X-Forwarded-for" );
       if ( remoteAddr == null || remoteAddr.trim().equals( "" ) )
       {
           remoteAddr = request.getRemoteAddr();
       }
       else
       {
           StringTokenizer st = new StringTokenizer( remoteAddr, "," );
           remoteAddr = st.nextToken();
       }
       return remoteAddr;
   }`;
code["py"] = `def extractRemoteIpAddress(request):
remoteAddr = request.getHeader("X-Forwarded-for")
if remoteAddr is None or remoteAddr.trim() == "":
    remoteAddr = request.getRemoteAddr()
else:
    st = StringTokenizer(remoteAddr, ",")
    remoteAddr = st.nextToken()
return remoteAddr`;
code["js"] = `   function getClientAddress(req) {
    return (req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress;
}`;
code["go"] = `func extractRemoteIpAddress(request *http.Request) string {
    remoteAddr := request.Header.Get("X-Forwarded-for")
    if remoteAddr == "" {
        remoteAddr = request.RemoteAddr
    } else {
        remoteAddr = strings.Split(remoteAddr, ",")[0]
    }
    return remoteAddr
}`;
methodData["Remote-IP-Extractor"] = {
    "Name": "Remote IP Extractor",
    "Description": "Extracts the remote IP address of the client making the request.",
    "No of Input Box": 0,
    "No of OutputBox": 0,
    "JS method name": "",
    "Code": code
};
code = {};
code["java"] = `/**
* Converts an object to its JSON representation.
*
* @param object The object to be converted
* @return The JSON representation of the object as a string
*/
public static String convertObjectToJSONConvert(final Object object) {
       Gson gson = new Gson();
       return gson.toJson(object);
   }`;
code["py"] = `def convertObjectToJSONConvert(object):
return json.dumps(object)`;
code["js"] = `function convertObjectToJSONConvert(object) {
    let gson = require('gson');
    return gson.toJson(object);
}`;
code["go"] = `
func convertObjectToJSONConvert(object interface{}) string {
    jsonBytes, err := json.Marshal(object)
    if err != nil {
        log.Fatal(err)
    }
    return string(jsonBytes)
}`;
methodData["Java-object-to-json-converter"] = {
    "Name": "Java object to json converter",
    "Description": "Converts an object to its JSON representation.",
    "No of Input Box": 0,
    "No of OutputBox": 0,
    "JS method name": "",
    "Code": code
};
code = {};
code["java"] = `/**
* Compresses the given file and writes it to the output zip stream.
*
* @param fileToZip The file to be compressed
* @param fileName The name of the file that will be used in the zip archive
* @param zipOut The output stream for the zip file
* @throws IOException if an I/O error has occurred
*/
private static void zipFile( final File fileToZip, final String fileName, final ZipOutputStream zipOut )
       throws IOException
   {
       if ( fileToZip.isHidden() )
       {
           return;
       }
       if ( fileToZip.isDirectory() )
       {
           if ( fileName.endsWith( "/" ) )
           {
               zipOut.putNextEntry( new ZipEntry( fileName ) );
               zipOut.closeEntry();
           }
           else
           {
               zipOut.putNextEntry( new ZipEntry( fileName + "/" ) );
               zipOut.closeEntry();
           }
           File[] children = fileToZip.listFiles();
           for ( File childFile : children )
           {
               zipFile( childFile, fileName + "/" + childFile.getName(), zipOut );
           }
           return;
       }
       FileInputStream fis = new FileInputStream( fileToZip );
       ZipEntry zipEntry = new ZipEntry( fileName );
       zipOut.putNextEntry( zipEntry );
       byte[] bytes = new byte[1024];
       int length;
       while ( ( length = fis.read( bytes ) ) >= 0 )
       {
           zipOut.write( bytes, 0, length );
       }
       fis.close();
   }`;
code["py"] = `
def zip_files(path, zip_path):
    zipf = zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED)
    for root, dirs, files in os.walk(path):
        for file in files:
            zipf.write(os.path.join(root, file))
    zipf.close()`;
code["js"] = `const yazl = require("yazl");
const fs = require("fs");

function zipDirectory(dirPath, zipFilePath) {
    const zipFile = new yazl.ZipFile();
    function addToZip(filePath) {
        const fileName = filePath.replace(dirPath, "");
        if (fs.lstatSync(filePath).isDirectory()) {
            zipFile.addEmptyDirectory(fileName);
            const files = fs.readdirSync(filePath);
            for (const file of files) {
                addToZip(\`\${filePath}/\${file}\`);
            }
        } else {
            zipFile.addFile(filePath, fileName);
        }
    }
    addToZip(dirPath);
    zipFile.outputStream.pipe(fs.createWriteStream(zipFilePath)).on("close", callback);
    zipFile.end();
}`;
code["go"] = `
func zipFiles(filename string, files []string) error {
    newZipFile, err := os.Create(filename)
    if err != nil {
        return err
    }
    defer newZipFile.Close()

    zipWriter := zip.NewWriter(newZipFile)
    defer zipWriter.Close()

    for _, file := range files {

        zipfile, err := os.Open(file)
        if err != nil {
            return err
        }
        defer zipfile.Close()

        // Get the file information
        info, err := zipfile.Stat()
        if err != nil {
            return err
        }

        header, err := zip.FileInfoHeader(info)
        if err != nil {
            return err
        }

        // Change to deflate to gain better compression
        // see http://golang.org/pkg/archive/zip/#pkg-constants
        header.Method = zip.Deflate

        writer, err := zipWriter.CreateHeader(header)
        if err != nil {
            return err
        }
        _, err = io.Copy(writer, zipfile)
        if err != nil {
            return err
        }
    }
    return nil
}
`;
methodData["File-Compressor"] = {
    "Name": "File Compressor",
    "Description": "This Utility coverts file into zip file .",
    "No of Input Box": 2,
    "No of OutputBox": 0,
    "JS method name": "differenceInMinutes",
    "Code": code
};
code = {};
code["java"] = `/**
* Formats a currency amount in the specified locale.
*
* @param amount The currency amount as a double.
* @param currencyCode The currency code for the desired locale .
* @return The formatted currency amount as a string.
*/
public static String formatCurrency(final Double amount, final String currencyCode) {
   Locale locale = new Locale("en", currencyCode);
   NumberFormat currencyFormatter = NumberFormat.getCurrencyInstance(locale);
   return currencyFormatter.format(amount);
}`;
code["py"] = `
def format_currency(amount, currency_code):
    locale = 'en_{}'.format(currency_code)
    return '{:,.2f}'.format(amount).format(locale=locale)`;
code["js"] = `const formatCurrency = (amount, currencyCode) => {
    return new Intl.NumberFormat(currencyCode, {
      style: 'currency',
      currency: currencyCode
    }).format(amount);
  };`;
code["go"] = `func FormatCurrency(amount float64, currencyCode string) string {
    locale := fmt.Sprintf("en_%s", currencyCode)
    currencyFormatter, _ := number.NewNumberFormatter(locale, number.Currency)
    return currencyFormatter.Format(amount)
}`;
methodData["Currency-Formatter"] = {
    "Name": "Currency Formatter",
    "Description": "This Utility takes amount as input and converts it in us currency format",
    "No of Input Box": 2,
    "No of OutputBox": 1,
    "JS method name": "formatCurrency",
    "Code": code
};
code = {};
code["java"] = `/**
* Formats a currency amount in Indian format by adding commas every two digits from the right.
*
* @param amount The currency amount as a string.
* @return The formatted currency amount in Indian format.
*/
public static String getCurrencyInIndianFormat( final String amount )
   {
       StringBuilder stringBuilder = new StringBuilder();
       char amountArray[] = amount.trim().toCharArray();
       int thousandsCounter = 0, lacsCounter = 0;
       for ( int i = amountArray.length - 1; i >= 0; i-- )
       {
           if ( thousandsCounter < 3 )
           {
               stringBuilder.append( amountArray[i] );
               thousandsCounter++;
           }
           else if ( lacsCounter < 2 )
           {
               if ( lacsCounter == 0 )
               {
                   stringBuilder.append( "," );
                   stringBuilder.append( amountArray[i] );
                   lacsCounter++;
               }
               else
               {
                   stringBuilder.append( amountArray[i] );
                   lacsCounter = 0;
               }
           }
       }
       return stringBuilder.reverse().toString();
   }`;
code["py"] = `def getCurrencyInIndianFormat(amount):
amount_array = list(amount.strip())
thousands_counter = 0
lacs_counter = 0
result = []
for i in range(len(amount_array)-1, -1, -1):
    if thousands_counter < 3:
        result.append(amount_array[i])
        thousands_counter += 1
    elif lacs_counter < 2:
        if lacs_counter == 0:
            result.append(',')
            result.append(amount_array[i])
            lacs_counter += 1
        else:
            result.append(amount_array[i])
            lacs_counter = 0
return ''.join(result[::-1])`;
code["js"] = `    const getCurrencyInIndianFormat = (amount) => {
    let stringBuilder = '';
    let amountArray = amount.trim().split('');
    let thousandsCounter = 0; 
    let lacsCounter = 0;
    for (let i = amountArray.length - 1; i >= 0; i--) {
        if (thousandsCounter < 3) {
            stringBuilder += amountArray[i];
            thousandsCounter++;
        } else if (lacsCounter < 2) {
            if (lacsCounter === 0) {
                stringBuilder += \`,\${amountArray[i]}\`;
                lacsCounter++;
            } else {
                stringBuilder += amountArray[i];
                lacsCounter = 0;
            }
        }
    }
    return stringBuilder.split('').reverse().join('');
};`;
code["go"] = `  func getCurrencyInIndianFormat(amount string) string {
    var stringBuilder strings.Builder
    amountArray := []rune(strings.TrimSpace(amount))
    thousandsCounter, lacsCounter := 0, 0
    for i := len(amountArray) - 1; i >= 0; i-- {
        if thousandsCounter < 3 {
            stringBuilder.WriteRune(amountArray[i])
            thousandsCounter++
        } else if lacsCounter < 2 {
            if lacsCounter == 0 {
                stringBuilder.WriteString(",")
                stringBuilder.WriteRune(amountArray[i])
                lacsCounter++
            } else {
                stringBuilder.WriteRune(amountArray[i])
                lacsCounter = 0
            }
        }
    }
    return stringBuilder.String()
}`;
methodData["Indian-Currency-Formatter"] = {
    "Name": "Indian Currency Formatter",
    "Description": "Formats a currency amount in Indian format by adding commas every two digits from the right.",
    "No of Input Box": 2,
    "No of OutputBox": 0,
    "JS method name": "getCurrencyInIndianFormat",
    "Code": code
};
code = {};
code["java"] = `/**
* Determines if the file located at the provided file path is less than or equal to the specified maximum file size.
*
* @param filePath The file path of the file to check.
* @param maxFileSize The maximum allowed file size in bytes.
* @return true if the file size is less than or equal to the maximum file size, false otherwise or if file not found.
*/
        public static boolean isFileSizeValid(final String filePath, final long maxFileSize) {
               File file = new File(filePath);
               if (!file.exists()) {
                   return false;
               }
               return file.length() <= maxFileSize;
           }`;
code["py"] = `
def isFileSizeValid(file_path, max_file_size):
    try:
        file_size = os.path.getsize(file_path)
        if file_size <= max_file_size:
            return True
    except FileNotFoundError:
        print(f"{file_path} not found.")
    return Fals`;
code["js"] = `const fs = require('fs');
function isFileSizeValid(filePath, maxFileSize) {
        const file = fs.statSync(filePath);
        if(!file) {
                return false;
        }
        return file.size <= maxFileSize;
}`;
code["go"] = `
func IsFileSizeValid(filePath string, maxFileSize int64) bool {
    file, err := os.Open(filePath)
    if err != nil {
        return false
    }
    defer file.Close()

    stat, err := file.Stat()
    if err != nil {
        return false
    }
    return stat.Size() <= MAX_FILE_SIZE
}`;
methodData["File-Size-Validator"] = {
    "Name": "File Size Validator",
    "Description": "Determines if the file located at the provided file path is less than or equal to the specified maximum file size.",
    "No of Input Box": 2,
    "No of OutputBox": 1,
    "JS method name": "isFileSizeValid",
    "Code": code
};
code = {};
code["java"] = `/**
* Determines if the file at the provided URL has the specified file format.
*
* @param urlOfImage The URL of the file to check.
* @param contentType The expected content type of the file.
* @return true if the file has the specified content type, false otherwise.
*/
public static Boolean isFileFormatValid( final String urlOfImage, final String contentType )
   {
       try
       {
           URL url = new URL( urlOfImage );
           URLConnection connection = url.openConnection();
           String contentType = connection.getContentType();
           if ( contentType.startsWith( contentType ) )
           {
               return true;
           }
       }
       catch ( Exception e )
       {
           e.printStackTrace();
       }
       return false;
   }`;
code["py"] = `
def isFileFormatValid(urlOfImage, contentType):
    try:
        with urllib.request.urlopen(urlOfImage) as url:
            actual_content_type = url.getheader('Content-Type')
            if actual_content_type.startswith(contentType):
                return True
    except Exception as e:
        print(e)
    return False`;
code["js"] = `        const http = require('http');

const isFileFormatValid = (url, contentType) => {
  const req = http.request(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      if (res.headers['content-type'].startsWith(contentType)) {
        return true;
      }
    });
  });

  req.on('error', (err) => {
    console.log(err);
    return false;
  });

  req.end();
};

module.exports = isFileFormatValid;`;
code["go"] = `func isFileFormatValid(url string, contentType string) bool {
    u, err := url.Parse(url)
    if err != nil {
      return false
    }
  
    conn, err := net.Dial("tcp", u.Host)
    if err != nil {
      return false
    }
  
    fmt.Fprintf(conn, "HEAD %s HTTP/1.0\r\n\r\n", u.Path)
    result, err := http.ReadResponse(bufio.NewReader(conn), nil)
    if err != nil {
      return false
    }
  
    return result.Header.Get("Content-Type") == contentType
  }`;
methodData["URL-File-Verification-Checker"] = {
    "Name": "URL File Verification Checker",
    "Description": "Determines if the file at the provided URL has the specified file. This utility takes input as urlOfImage and verifies the extention of image , file etc.",
    "No of Input Box": 2,
    "No of OutputBox": 1,
    "JS method name": "isFileFormatValid",
    "Code": code
};