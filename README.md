# **hg-date**
A minimal Dates lib, esay to manipulate Dates.

## **Installation Guide**
- - -
### ***NPM:***
    $ npm install hg-date --save
```javascript
let HgDate = require('hg-date')
```
```javascript
import HgDate from 'hg-date'
```
### ***CDN:***
```javascript
<script src="https://unpkg.com/hg-date"></script>
<script>
  new HgDate()
</script>
```

## **Usage**
```javascript
new HgDate().format('YYYY-MM-DD')
//=> 2019-08-28
new HgDate('2019-08-28').add(1, 'd').format('YYYY-MM-DD')
//=> 2019-08-29
new HgDate('20190828145430567').format('YYYY-MM-DD hh:mm:ss.S')
//=> 2019-08-28 14:54:30.567
new HgDate('2019-08-28').diff('2019-08-25').getAs('day')
//=> 3
```

## **API**
- - -
### **HgDate**: class
- (static) Duration
- format
- add
- substract
- startOf
- endOf
- getTime
- diff
#### ***METHODS***

> ### **constructor**
> - - -
> ### *param*:   
> - date?：string | Date | number - the time of the date
>> date string can be follows and compatible with all browsers:
>> 1. YYYY-MM-DD
>> 2. YYYY/MM/DD
>> 3. YYYYMMDD
>> 4. YYYY-MM-DD hh:mm
>> 5. YYYY/MM/DD hh:mm
>> 6. YYYYMMDDhhmm
>> 7. YYYY-MM-DD hh:mm:ss
>> 8. YYYY/MM/DD hh:mm:ss
>> 9. YYYYMMDDhhmmss
>> 10. YYYY-MM-DD hh:mm:ss.S
>> 11. YYYY/MM/DD hh:mm:ss.S
>> 12. YYYYMMDDhhmmssS   
> - - -
> example:
> ```javascript
>new HgDate() 
>new HgDate('2019-05-11')
>new HgDate(new Date())
>new HgDate(1566978539522)
> ``` 
> #

> ### function **format**   
> - - -
> ### *param*:
> - tokenStr: string - the date string that you want to format.the detail see Format Token Table.
> ### *return*:
> - string
> - - -
> example:
> ```javascript
>new HgDate().format('YYYY|MM|DD hh:mm')
>// => 2019|05|11 14:30
>new HgDate().format('YYYY/MM/DD hh:mm:ss.S')
>// => 2019/05/11 14:30:20.320
> ``` 
> #

## **Format Token**
- - -
|  token | output | desc |
| :----: | :----: | :----: |
| YYYY  | 2019 | years |
| MM | 12 | mouth |
| DD | 24 | days |
| hh | 14 | hours |
| mm | 34 | minutes |
| ss | 59 | seconds |
| S | 199 | milliseconds |

> ### function **add**   
> - - -
> ### *param*:
> - amt: number - the amount you want to add.
> - unit: Unit - this value of Unit Table(Unit or Unit Abbr).
> ### *return*:
> - HgDate
> - - -
> example:
> ```javascript
>new HgDate('2019-05-11').add(4, 'd').format('YYYY-MM-DD')
>// => 2019-05-15 00:00
>new HgDate('2019-05-11 12:50').add(4, 'minute').format('YYYY-MM-DD hh:mm')
>// => 2019-05-11 12:54
> ``` 
> #

## **Unit Table**
- - -
|  Unit Abbr | Unit |
| :----: | :----: |
| ms  | millisecond |
| s | second |
| m | minute |
| h | hour |
| d | day |
| M | month |
| y | year |

> ### function **substract**   
> - - -
> ### *param*:
> - amt: number - the amount you want to substract.
> - unit: Unit - this value of Unit Table(Unit or Unit Abbr).
> ### *return*:
> - HgDate
> - - -
> example:
> ```javascript
>new HgDate('2019-05-11').substract(4, 'd').format('YYYY-MM-DD')
>// => 2019-05-07 00:00
>new HgDate('2019-05-11 12:50').substract(4, 'minute').format('YYYY-MM-DD hh:mm')
>// => 2019-05-11 12:46
> ``` 
> #

> ### function **startOf**   
> - - -
> ### *param*:
> - unit: Unit - this value of Unit Table(Unit or Unit Abbr).
> ### *return*:
> - HgDate
> - - -
> example:
> ```javascript
>new HgDate('2019-05-11 13:14').startOf('d').format('YYYY-MM-DD hh:mm')
>// => 2019-05-11 00:00
>new HgDate('2019-05-11 12:50:34').startOf('minute').format('YYYY-MM-DD hh:mm:ss')
>// => 2019-05-11 12:50:00
> ``` 
> #

> ### function **endOf**   
> - - -
> ### *param*:
> - unit: Unit - this value of Unit Table(Unit or Unit Abbr).
> ### *return*:
> - HgDate
> - - -
> example:
> ```javascript
>new HgDate('2019-05-11 13:14').endOf('d').format('YYYY-MM-DD hh:mm')
>// => 2019-05-11 23:59
>new HgDate('2019-05-11 12:50:34').endOf('minute').format('YYYY-MM-DD hh:mm:ss')
>// => 2019-05-11 12:50:59
> ``` 
> #

> ### function **getTime**   
> - - -
> ### *param*:
> ### *return*: the millisecond of the date(same as date)
> - number 
> - - -
> example:
> ```javascript
>new HgDate().getTime()
>// => 1566978539522
> ``` 
> #

> ### function **diff**   
> - - -
> ### *param*:
> - date: HgDate | Date | string | number
> ### *return*: the millisecond of the date(same as date)
> - Duration (see class Duration)
> - - -
> example:
> ```javascript
> new HgDate('2019-09-28').diff('2019-08-25').getAs('day')
> //=> 3
> new HgDate('2019-08-28 12:03').diff(new HgDate('2019-08-25 12:02')).get('m')
> //=> 1.5
> new HgDate('2019-08-28 12:03').diff(new HgDate('2019-08-25 12:02')).get('m', true)
> //=> 1
> ``` 
> #

### **HgDate**: class
- getTime
- getAs
- get
#### ***METHODS***
> ### **construtor**   
> - - -
> ### *param*:
> - number - millisecond
> - - -
> example:
> ```javascript
>new HgDate.Duration(5000)
> ``` 
> #

> ### function **getTime**   
> - - -
> ### *param*:
> ### *return*: the millisecond of the date(same as date)
> - number 
> - - -
> example:
> ```javascript
>new HgDate.Duration(5421).getTime()
>// => 5421
> ```
> #

> ### function **get** 
> - - -
> ### *param*:
> - unit: Unit - this value of Unit Table(Unit or Unit Abbr).
>> The length of a duration in months is defined as 30 days.   
>> The length of a duration in years is defined as 365 days.
> ### *return*: the millisecond of the date(same as date)
> - number 
> - - -
> example:
> ```javascript
>new HgDate.Duration(5421).get('s')
>// => 5
>new HgDate.Duration(5421).get('ms')
>// => 521
> ```
> #

> ### function **getAs** 
> - - -
> ### *param*:
> - unit: Unit - this value of Unit Table(Unit or Unit Abbr).
> - isRound?: boolean = false - is need round.if isRound = false this result will round to 2 decimal places.
>> The length of a duration in months is defined as 30 days.   
>> The length of a duration in years is defined as 365 days.
> ### *return*: the millisecond of the date(same as date)
> - number 
> - - -
> example:
> ```javascript
>new HgDate.Duration(5421).getAs('s')
>// => 5.42
>new HgDate.Duration(5421).getAs('s', true)
>// => 5
> ```
> #