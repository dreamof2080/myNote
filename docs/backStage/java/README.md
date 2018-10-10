---
sidebarDepth: 1
title: jdk1.8新特性
---


## 新的日期处理包：java.time.*
<code>java.time.LocalDate</code>   
<code>java.time.localDateTime</code>   
<code>java.time.LocalTime</code>   

以下为整理的日期时间处理的具体用法，代码已整理到util.DateHelper: 
```java
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.*;
import java.time.chrono.ChronoZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.*;

/**
 * 日期常用工具方法类
 */
public final class DateHelper {

	/**
	* "YYYY-MM-DD"日期格式
	*/
	public static final String DATE_YYYYMMMMDD = "yyyy-MM-dd";

	/**
	 * "HH:MM:SS"时间格式
	 */
	public static final String TIME_HHCMMCSS = "HH:mm:ss";
	
	/**
	 * "HH:MM"时间格式
	 */
	public static final String TIME_HHCMM = "HH:MM";
	
	/**
	 * "HH:MM:SS AMPM"时间格式
	 */
	public static final String TIME_HHCMMCSSAMPM = "HH:MM:SS AMPM";

	private static SimpleDateFormat m_dtFormater = null;

	/**
	 * 将Date转换为LocalDate
	 * @param date
	 * @return LocalDate
	 */
	public static LocalDate dateToLocalDate(Date date){
		Instant instant = date.toInstant();
		ZoneId zoneId = ZoneId.systemDefault();
		return instant.atZone(zoneId).toLocalDate();
	}

	/**
	 * 将Date转换为LocalDateTime
	 * @param date
	 * @return
	 */
	public static LocalDateTime dateToLocalDateTime(Date date){
		Instant instant = date.toInstant();
		ZoneId zoneId = ZoneId.systemDefault();
		return instant.atZone(zoneId).toLocalDateTime();
	}

	/**
	 * 将LocalDate转换为Date
	 * @param localDate
	 * @return
	 */
	public static Date localDateToDate(LocalDate localDate){
		ZoneId zoneId = ZoneId.systemDefault();
		ChronoZonedDateTime<LocalDate> zonedDateTime = localDate.atStartOfDay(zoneId);
		return Date.from(zonedDateTime.toInstant());
	}

	/**
	 * 将LocalDateTime转换为Date
	 * @param localDateTime
	 * @return
	 */
	public static Date localDateTimeToDate(LocalDateTime localDateTime){
		ZoneId zoneId = ZoneId.systemDefault();
		ChronoZonedDateTime<LocalDate> zonedDateTime = localDateTime.atZone(zoneId);
		return Date.from(zonedDateTime.toInstant());
	}

	/**
	 * 将String转换为LocalDate
	 * @param day "2018-01-01"
	 * @return LocalDate
	 */
	public static LocalDate stringToLocalDate(String day){
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_YYYYMMMMDD);
		return LocalDate.parse(day, formatter);
	}

	/**
	 * 将String转换为LocalDateTime
	 * @param day "2018-01-01 10:10:01"
	 * @return LocalDateTime
	 */
	public static LocalDateTime stringToLocalDateTime(String day){
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DATE_YYYYMMMMDD+" "+TIME_HHCMMCSS);
		return LocalDateTime.parse(day, formatter);
	}

	/**
	 * 将LocalDateTime转换为String
	 * @param localDateTime
	 * @return "2018-01-01 10:10:01"
	 */
	public static String localDateTimeToString(LocalDateTime localDateTime){
		return DateTimeFormatter.ofPattern(DATE_YYYYMMMMDD+" "+TIME_HHCMMCSS).format(localDateTime);
	}

	/**
	 * String格式日期转换Date类型。
	 * @param source		String类型日期(yyyy-MM-dd)
	 * @return				Date类型日期
	 */
	public static Date parseDate(String source) {
		SimpleDateFormat format = new SimpleDateFormat(DATE_YYYYMMMMDD);
		try {
			return format.parse(source);
		} catch (Exception e) {
			return null;
		}
	}

	/**
	 * String 转为date型
	 */

	public static Date stringtoDate(String stringDate ){
		if (StringHelper.isEmpty(stringDate)){
			return new Date();
		}
		DateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = format1.parse(stringDate);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return date;
	}

	/**
	 * 获取当前日期时间戳
	 * @return	1537145473358
	 */
	public static String getTimeMillis() {
		return System.currentTimeMillis()+"";
	}

	/**
	 * 获取当前日期时间
	 * @return		yyyy-MM-dd HH:mm:ss
	 */
	public static String getCurDateTime() {
		return DateTimeFormatter.ofPattern(DATE_YYYYMMMMDD+" "+TIME_HHCMMCSS).format(LocalDateTime.now());
	}

	/**
	 * 获取当前日期
	 * @return		YYYY-MM-DD
	 */
	public static String getCurrentDate() {
		return LocalDate.now().toString();
	}

	/**
	 * 获取当前年月份
	 * @return		yyyy-MM
	 */
	public static String getCurrentYearMonth() {
		return YearMonth.from(LocalDate.now()).toString();
	}

	/**
	 * 获取当前月日
	 * @return
	 */
	public static String getCurrentMonthDay(){
		return MonthDay.from(LocalDate.now()).toString().replaceFirst("--","");
	}
	
	/**
	 * 将Date类型转换为YYYY-MM-DD格式字符串。
	 * @param newdate	Date类型日期
	 * @return			String类型日期
	 */
	public static String getDate(Date newdate){
		return DateTimeFormatter.ofPattern(DATE_YYYYMMMMDD).format(dateToLocalDate(newdate));
	}

	/**
	 * 获取当前年份
	 * @return		YYYY
	 */
	public static String getCurrentYear() {
		return LocalDate.now().getYear()+"";
	}

	/**
	 * 计算两个日期之间的天数。
	 * @param datebegin	开始日期: "2018-01-01"
	 * @param dateend	结束日期: "2018-01-03"
	 * @return				天数: 2
	 */
	public static long getDaysBetween(String datebegin, String dateend) {
		LocalDate localDate1 = stringToLocalDate(datebegin);
		LocalDate localDate2 = stringToLocalDate(dateend);
		return localDate1.until(localDate2, ChronoUnit.DAYS);
	}

	/**
	 * 获取当前时间(HH:MM:SS)。
	 * @return		当前时间
	 */
	public static String getCurrentTime() {
		return DateTimeFormatter.ofPattern(TIME_HHCMMCSS).format(LocalTime.now());
	}

	/**
	 * 计算两个日期之间的时间间隔(d1-d2)天数，可选择是否计算工作日。
	 * @param d1			开始日期
	 * @param d2			结束日期
	 * @param onlyWorkDay 	是否只计算工作日
	 * @return 			间隔天数
	 */
	public static long getDaysBetween(String d1, String d2, boolean onlyWorkDay) {
		if (!onlyWorkDay) {
			return getDaysBetween(d1, d2);
		} else {
			long days = 0;
			Calendar calendar = Calendar.getInstance();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			try {
				Date dt1 = sdf.parse(d1);
				Date dt2 = sdf.parse(d2);
				days = (dt1.getTime() - dt2.getTime()) / (3600 * 24 * 1000);
				for (calendar.setTime(dt1); calendar.getTime().after(dt2); calendar.add(Calendar.DAY_OF_YEAR, -1)) {
					int week = calendar.get(Calendar.DAY_OF_WEEK);
					if (week == Calendar.SUNDAY || week == Calendar.SATURDAY) {
						days--;
					}
				}
				if (days < 0) {
					days = 0;
				}
			} catch (Exception e) {
			}
			return days;
		}
	}

	/**
	 * 判断日期是否为工作日(周六和周日为非工作日)。
	 * @param date		日期
	 * @return 		是否为工作日
	 */
	public static boolean isWorkDay(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		int week = calendar.get(Calendar.DAY_OF_WEEK);
		if (week == Calendar.SUNDAY || week == Calendar.SATURDAY) {
			return false;
		} else {
			return true;
		}
	}

	/**
	 * 计算两个时间之间分钟(minutes)。
	 * @param s1		开始日期(yyyy-MM-dd/HH:mm:ss)
	 * @param s2		结束日期(yyyy-MM-dd/HH:mm:ss)
	 * @return			间隔分钟
	 */
	public static long getMinutesBetween(String s1, String s2) {
		LocalDateTime localDateTime1 = stringToLocalDateTime(s1);
		LocalDateTime localDateTime2 = stringToLocalDateTime(s2);
		return localDateTime1.until(localDateTime2,ChronoUnit.MINUTES);
	}

	/**
	 * 返回两个日期间隔。
	 * <p>按月分隔的list，list里面每个月一个map,第一天begindate，最后一天enddate</p>
	 * @param d1		开始日期(yyyy-MM-dd)
	 * @param d2		结束日期
	 * @return			按月分隔的List
	 */
	public static List<HashMap> getDateBetween(String d1, String d2) {
		ArrayList<HashMap> list = new ArrayList<HashMap>();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			Calendar cal1 = Calendar.getInstance();
			Calendar cal2 = Calendar.getInstance();
			cal1.setTime(sdf.parse(d1));
			cal2.setTime(sdf.parse(d2));

			int monthnum = (cal2.get(Calendar.YEAR) - cal1.get(Calendar.YEAR)) * 12 + cal2.get(Calendar.MONTH) - cal1.get(Calendar.MONTH);
			for (int i = 0; i < monthnum; i++) {
				HashMap<String, Object> map = new HashMap<String, Object>();
				map.put("begindate", sdf.format(cal1.getTime()));
				cal1.add(Calendar.DATE, cal1.getActualMaximum(Calendar.DATE) - cal1.get(Calendar.DATE));
				map.put("enddate", sdf.format(cal1.getTime()));
				list.add(map);
				cal1.add(Calendar.MONTH, 1);
				cal1.add(Calendar.DATE, 1 - cal1.get(Calendar.DATE));
			}
			HashMap<String, Object> map = new HashMap<String, Object>();
			map.put("begindate", sdf.format(cal1.getTime()));
			map.put("enddate", d2);
			list.add(map);
		} catch (Exception e) {
			return list;
		}
		return list;
	}

	/**
	 * 返回两个时间段相交的天数。 
	 * @param b1	开始时间段开始日期(yyyy-MM-dd)
	 * @param e1	开始时间段结束日期
	 * @param b2	结束时间段开始日期
	 * @param e2	结束时间段结束日期
	 * @return		间隔天数
	 */
	public static long getDays(String b1, String e1, String b2, String e2) {
		long ret = 0;
		String begindate = "";
		String enddate = "";
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			Calendar begin1 = Calendar.getInstance();
			Calendar end1 = Calendar.getInstance();
			Calendar begin2 = Calendar.getInstance();
			Calendar end2 = Calendar.getInstance();
			begin1.setTime(sdf.parse(b1));
			end1.setTime(sdf.parse(e1));
			begin2.setTime(sdf.parse(b2));
			end2.setTime(sdf.parse(e2));
			//时间段不相交 
			if ((begin2.getTime().getTime() > end1.getTime().getTime() && end2.getTime().getTime() > end1.getTime().getTime())
					|| (begin2.getTime().getTime() < begin1.getTime().getTime() && end2.getTime().getTime() < begin1.getTime().getTime())) {
				//System.out.println("b"+ret);
				return ret;
			}

			if (begin2.getTime().getTime() >= begin1.getTime().getTime()) {
				begindate = sdf.format(begin2.getTime());
			} else {
				begindate = sdf.format(begin1.getTime());
			}
			if (end2.getTime().getTime() >= end1.getTime().getTime()) {
				enddate = sdf.format(end1.getTime());
			} else {
				enddate = sdf.format(end2.getTime());
			}

			if (!begindate.equals("") && !enddate.equals("")) {
				ret = getDaysBetween(begindate, enddate);
			}
		} catch (Exception e) {
			return 0;
		}
		return ret;
	}

	/**
	 * 比较两个日期d1<d2。
	 * @param d1		开始日期(yyyy-MM-dd)
	 * @param d2		结束日期
	 * @return			d1是否小于d2
	 */
	public static boolean after(String d1, String d2) {
		LocalDate localDate1 = stringToLocalDate(d1);
		LocalDate localDate2 = stringToLocalDate(d2);
		return localDate1.isBefore(localDate2);
	}

	/**
	 * 移动日期。
	 * @param date		原日期(yyyy-MM-dd)	
	 * @param len		移动天数
	 * @return			移动后日期
	 */
	public static String dayMove(String date, int len) {
		LocalDate localDate = stringToLocalDate(date);
		return localDate.plus(len,ChronoUnit.DAYS).toString();
	}

	/**
	 * 移动日期。
	 * @param date		原日期(yyyy-MM-dd)
	 * @param year		年
	 * @param month	月
	 * @param day		日
	 * @param honr		小时
	 * @param mintues	分钟
	 * @param second	秒
	 * @return			移动后日期
	 */
	public static String dayMoveDateTime(String date, int year, int month, int day, int honr, int mintues, int second) {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		try {
			Calendar cal = Calendar.getInstance();
			cal.setTime(sdf.parse(date));
			cal.add(Calendar.YEAR, year);
			cal.add(Calendar.MONTH, month);
			cal.add(Calendar.DATE, day);
			cal.add(Calendar.HOUR, honr);
			cal.add(Calendar.MINUTE, mintues);
			cal.add(Calendar.SECOND, second);
			return sdf.format(cal.getTime());
		} catch (Exception e) {
			return date;
		}
	}
	
	/**
	 * 移动日期。
	 * @param date		原日期(yyyy-MM-dd)
	 * @param year		年
	 * @param month	月
	 * @param day		日
	 * @param honr		小时
	 * @param mintues	分钟
	 * @param second	秒
	 * @return			移动后日期
	 */
	public static String dayMoveDateTime(String date,String dateformat, int year, int month, int day, int honr, int mintues, int second) {
		SimpleDateFormat sdf = new SimpleDateFormat(dateformat);
		try {
			Calendar cal = Calendar.getInstance();
			cal.setTime(sdf.parse(date));
			cal.add(Calendar.YEAR, year);
			cal.add(Calendar.MONTH, month);
			cal.add(Calendar.DATE, day);
			cal.add(Calendar.HOUR, honr);
			cal.add(Calendar.MINUTE, mintues);
			cal.add(Calendar.SECOND, second);
			return sdf.format(cal.getTime());
		} catch (Exception e) {
			return date;
		}
	}
	
	/**
	 * 获取日期控件中WdatePicker里配置的dateFmt中的值，即日期格式
	 * @param fieldcheck
	 * @return 
	 */
	public static String getWdatePickerDateFmt(String fieldcheck){
		String dateformat = "";
		if(StringHelper.isEmpty(fieldcheck)){
			dateformat = "yyyy-MM-dd HH:mm:ss";
		}
		//{dateFmt:'yyyy年MM月dd日 HH时mm分ss秒',alwaysUseStartDate:true}
		int dateFmtIndex = fieldcheck.indexOf("dateFmt");
		if(dateFmtIndex>-1){
			int datefmtStart = fieldcheck.indexOf("'", dateFmtIndex);
			int datefmtEnd = fieldcheck.indexOf("'",datefmtStart+1);
			dateformat = fieldcheck.substring(datefmtStart+1,datefmtEnd);
		}
		return dateformat;
	}



	/**
	 * 移动月份。
	 * @param date		"2018-01-01"
	 * @param len		2
	 * @return			"2018-03"
	 */
	public static String monthMove(String date, int len) {
		LocalDate localDate = stringToLocalDate(date);
		return YearMonth.from(localDate.plus(len,ChronoUnit.MONTHS)).toString();
	}

	/**
	 * 移动月份。
	 * @param date		"2018-01-01"
	 * @param len		2
	 * @return			"2018-03-01"
	 */
	public static String monthMoveReturnDay(String date, int len) {
		LocalDate localDate = stringToLocalDate(date);
		return localDate.plus(len,ChronoUnit.MONTHS).toString();
	}
	
	/**
	 * 截取2个时间段相交的时间段。
	 * @param b1		开始时间段开始时间
	 * @param e1		开始时间段结束时间
	 * @param b2		结束时间段开始时间
	 * @param e2		结束时间段结束时间
	 * @return			相交时间段 String[] = {array[0]=begindate ,array[1]=enddate}，不相交array[0]=""
	 */
	public static String[] getBetweenDate(String b1, String e1, String b2, String e2) {
		String[] date = new String[2];
		String begindate = "";
		String enddate = "";
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			Calendar begin1 = Calendar.getInstance();
			Calendar end1 = Calendar.getInstance();
			Calendar begin2 = Calendar.getInstance();
			Calendar end2 = Calendar.getInstance();
			begin1.setTime(sdf.parse(b1));
			end1.setTime(sdf.parse(e1));
			begin2.setTime(sdf.parse(b2));
			end2.setTime(sdf.parse(e2));
			if ((begin2.getTime().getTime() >= end1.getTime().getTime() && end2.getTime().getTime() >= end1.getTime().getTime())
					|| (begin2.getTime().getTime() <= begin1.getTime().getTime() && end2.getTime().getTime() <= begin1.getTime().getTime())) {
				date[0] = "";
				return date;
			}

			if (begin2.getTime().getTime() >= begin1.getTime().getTime()) {
				begindate = sdf.format(begin2.getTime());
			} else {
				begindate = sdf.format(begin1.getTime());
			}
			if (end2.getTime().getTime() >= end1.getTime().getTime()) {
				enddate = sdf.format(end1.getTime());
			} else {
				enddate = sdf.format(end2.getTime());
			}

			if (!begindate.equals("") && !enddate.equals("")) {
				date[0] = begindate;
				date[1] = enddate;
			}
		} catch (Exception e) {

		}
		return date;
	}

	/**
	 * 根据日期返回该月的第一天。
	 * @param date		日期
	 * @return			该月第一天
	 */
	public static String getFirstDayOfMonthWeek(Date date) {
		LocalDate localDate = dateToLocalDate(date);
		return YearMonth.from(localDate)+"-01";
	}

	/**
	 * 根据日期返回该月的最后一天。
	 * @param date		日期
	 * @return			该月最后一天
	 */
	public static String getLastDayOfMonthWeek(Date date) {
		LocalDate localDate = dateToLocalDate(date);
		return YearMonth.from(localDate)+"-"+localDate.lengthOfMonth();
	}

	/**
	 * 格式化Date类型日期为yyyy-MM-dd格式，如果date1为null,返回当天日期。
	 * @param date1 		Date类型日期
	 * @return String		String类型日期(yyyy-MM-dd)
	 */
	public static String getShortDate(Date date1) {
		String strDate = null;
		if (date1 == null){
			return LocalDate.now().toString();
		}else{
			return dateToLocalDate(date1).toString();
		}
	}

	/**
	 * 按指定格式格式化日期，如format为null默认按yyyy-MM-dd格式转换。
	 * @param date		Date类型日期
	 * @param format	格式
	 * @return			String类型日期
	 */
	public static String convertDateIntoDisplayStr(Date date, String format) {
		LocalDateTime localDateTime = dateToLocalDateTime(date);
		return DateTimeFormatter.ofPattern(format).format(localDateTime);
	}

	/**
  	* 取得当前星期的第一天
  	* 
  	* @return
  	*/
    public static Date getCurrentWeekFirstDay(){
    	Date date = new Date();
    	Calendar calendar = Calendar.getInstance();
    	calendar.setTime(date);
    	calendar.set(Calendar.DAY_OF_WEEK, calendar.getActualMinimum(Calendar.DAY_OF_WEEK));
    	Date first = calendar.getTime();//getDay(calendar.getTime(), 1);
    	if (getDayOfWeek(date)==1){//如果今天是星期日
    		first = getDay(calendar.getTime(), -6);
    	}
    	else{
    		first = getDay(calendar.getTime(), 1);
    	}
    	return first;
    }
    
    /**
  	* 取得所给日期的星期的第一天
  	* 
  	* @return
  	*/
    public static String getFirstDayOfWeek(Date date){
//    	Date date = new Date();
    	Calendar calendar = Calendar.getInstance();
    	calendar.setTime(date);
    	calendar.set(Calendar.DAY_OF_WEEK, calendar.getActualMinimum(Calendar.DAY_OF_WEEK));
    	Date first = calendar.getTime();//getDay(calendar.getTime(), 1);
    	if (getDayOfWeek(date)==1){//如果今天是星期日
    		first = getDay(calendar.getTime(), -6);
    	}
    	else{
    		first = getDay(calendar.getTime(), 1);
    	}
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    	return sdf.format(first);
    }
    
    /**
  	* 取得所给日期的星期的最后一天
  	* 
  	* @return
  	*/
    public static String getLastDayOfWeek(Date date){
    	Calendar calendar = Calendar.getInstance();
    	calendar.setTime(date);
    	calendar.set(Calendar.DAY_OF_WEEK, calendar.getActualMaximum(Calendar.DAY_OF_WEEK));
    	Date last = calendar.getTime();//getDay(calendar.getTime(), 1);
    	if (getDayOfWeek(date)==1){//如果今天是星期日
    		last = getDay(calendar.getTime(), -6);
    	}
    	else{
    		last = getDay(calendar.getTime(), 1);
    	}
    	SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    	return sdf.format(last);
    }
    
    /**
     * 取得当前日期为本周的第几天
     * 
     * @param date
     * @return
     */
    public static int getDayOfWeek(Date date){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        return calendar.get(Calendar.DAY_OF_WEEK);
    }
    
    /**
     * 获取当前日期是星期几<br>
     * 
     * @param dt
     * @return 当前日期是星期几
     */
    public static String getWeekOfDate(Date dt) {
        String[] weekDays = {"星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"};
        Calendar cal = Calendar.getInstance();
        cal.setTime(dt);
        int w = cal.get(Calendar.DAY_OF_WEEK) - 1;
        if (w < 0) {
			w = 0;
		}
        return weekDays[w];
    }
    
    /**
     * 返回指定日期的前后的i天
     * 
     * @param date
     * @param i
     * @return
     */
    public static Date getDay(Date date, int i){
    	Calendar calendar = Calendar.getInstance();
    	calendar.setTime(date);
    	calendar.add(Calendar.DAY_OF_YEAR, i);
    	return calendar.getTime();
    }

    //获得第几季度   
    public static int getThisSeasonTime(int month){         
        int season = 1;   
        if(month>=1&&month<=3){   
            season = 1;   
        }   
        if(month>=4&&month<=6){   
            season = 2;   
        }   
        if(month>=7&&month<=9){   
            season = 3;   
        }   
        if(month>=10&&month<=12){   
            season = 4;   
        }   
        return season;
    }
    
    public static String getSeasonStart(int season){
    	String array[][] = {{"01","02","03"},{"04","05","06"},{"07","08","09"},{"10","11","12"}};  
    	
    	String start_month = array[season-1][0];   
    	String year = getCurrentYear();
    	String date = year+"-"+start_month+"-01";
    	return date;
    	
    }
    
    public static String getSeasonend(int season){
    	String array[][] = {{"01","02","03"},{"04","05","06"},{"07","08","09"},{"10","11","12"}};      	
    	String end_month = array[season-1][2];    
    	String year = getCurrentYear();
    	String month = year+"-"+end_month;
    	String lastmonth = monthMove(month,1)+"-01";
    	String enddate = dayMove(lastmonth,-1);
    	return enddate;    	
    }
    
    public static String getNextDateStr(String dateStr,String period) {
    	String format = DATE_YYYYMMMMDD;
    	if(dateStr.indexOf("/")>0){
    		format ="yyyy/MM/dd";
    	}
    	if(StringHelper.isEmpty(period)) {
    		period = "0";
    	}
    	if (m_dtFormater == null)
        {
            m_dtFormater = new SimpleDateFormat();
        }
    	 m_dtFormater.applyPattern(format);
    	 if(!StringHelper.isEmpty(dateStr) && !StringHelper.isEmpty(period)) {
    		 try {
			Date date =	m_dtFormater.parse(dateStr);
			int pday = Integer.parseInt(period);
			long rs = date.getTime() - (long)3600 * 24 * 1000 * pday;
			date.setTime(rs);
			dateStr = m_dtFormater.format(date);
			return dateStr;
			} catch (ParseException e) {
				return null;
			}
    	 }
    	 return null;
    }

}
```
## stream
### list去重
```java
List<String> list = Arrays.asList("hello welcome", "world hello", "hello world","hello world welcome");
//返回一个新的List<Stream<String>>
list.stream()
    .map(item -> Arrays.stream(item.split(" ")))
    .distinct().collect(Collectors.toList())
    .forEach(System.out::print);
//返回一个新的List<String>
list.stream()
    .flatMap(item -> Arrays.stream(item.split(" ")))
    .distinct().collect(Collectors.toList())
    .forEach(System.out::print);
```

### filter使用
```java
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//输出大于5的数字
List<Integer> result = list.stream().filter(item -> item >= 5).collect(Collectors.toList());
```
### reduce使用
```java
Stream<Integer> stream = Arrays.stream(new Integer[]{1, 2, 3, 4, 5, 6, 7, 8});
//求集合元素只和
Integer result = stream.reduce(0, Integer::sum);
System.out.println(result);
stream = Arrays.stream(new Integer[]{1, 2, 3, 4, 5, 6, 7});
//求和
stream.reduce((i, j) -> i + j).ifPresent(System.out::println);
stream = Arrays.stream(new Integer[]{1, 2, 3, 4, 5, 6, 7});
//求最大值
stream.reduce(Integer::max).ifPresent(System.out::println);
stream = Arrays.stream(new Integer[]{1, 2, 3, 4, 5, 6, 7});
//求最小值
stream.reduce(Integer::min).ifPresent(System.out::println);
stream = Arrays.stream(new Integer[]{1,2, 3, 4, 5, 6, 7});
//做逻辑
stream.reduce((i, j) -> i > j ? j : i).ifPresent(System.out::println);
stream = Arrays.stream(new Integer[]{1, 2, 3, 4, 5, 6, 7});
//求逻辑求乘机
int result2 = stream.filter(i -> i % 2 == 0).reduce(1, (i, j) -> i * j);
Optional.of(result2).ifPresent(System.out::println);
```