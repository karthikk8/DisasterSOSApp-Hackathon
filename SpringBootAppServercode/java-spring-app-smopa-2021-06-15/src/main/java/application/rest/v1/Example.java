package application.rest.v1;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cloudant.client.api.ClientBuilder;
import com.cloudant.client.api.CloudantClient;
import com.cloudant.client.api.Database;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import org.apache.tomcat.util.buf.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.web.bind.annotation.ResponseBody;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController

public class Example {

	@RequestMapping("/v1")
   public @ResponseBody ResponseEntity<String> example() {
        List<String> list = new ArrayList<>();
        //return a simple list of strings
        list.add("Congratulations, your application is up and running");
        return new ResponseEntity<String>(list.toString(), HttpStatus.OK);
    }


	@PostMapping(consumes= {
	 		MediaType.APPLICATION_JSON_VALUE	
	 	},path="/registeruser",produces=MediaType.APPLICATION_JSON_VALUE)
	
	 public  @ResponseBody ResponseEntity<String> register(@RequestBody Map<Object,Object> inputparameters) {
		  List<String> list = new ArrayList<>();
		  String finalmessage=null;
		 try {
			ClientBuilder.url(new URL("https://c113358f-f5d0-4fa1-a2de-a49e02fb4652-bluemix.cloudantnosqldb.appdomain.cloud"))
			.iamApiKey("EoS9h6YsUtRDxw1ydY9kNfOtr_ioUj2xBHLFsFTKzcdB")
			.build();
		} catch (MalformedURLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		  Connection c = null;
	      Statement stmt = null;
	      try {
	        
	         String firstname=(String) inputparameters.get("firstname");
	         String lname=(String)inputparameters.get("lastname");
	         String emailaddress=(String)inputparameters.get("emailaddress");
	         String noofpeoplefamily=(String)inputparameters.get("noofpeople");
	         String mobilenumber=(String)inputparameters.get("mobilenumber");
	         String Loginpassword=(String)inputparameters.get("loginpassword");
	         String HomelocationLatitude=(String)inputparameters.get("HomelocationLatitude");
	         String HomelocationLongitude=(String)inputparameters.get("HomelocationLongitude");
	         String Residentialaddress=(String)inputparameters.get("Residentialaddress");
	         String Officeaddress=(String)inputparameters.get("Officeaddress");
	         boolean Consenttonotification=(boolean)inputparameters.get("Consenttonotification");
	         String sConsenttonotification=String.valueOf(Consenttonotification);
	         String usercontact1mobileno=(String)inputparameters.get("usercontact1mobileno");
	         String usercontact1emailaddress=(String)inputparameters.get("usercontact1emailaddress");
	         String usercontact1name=(String)inputparameters.get("usercontact1name");
	         String usercontact2mobileno=(String)inputparameters.get("usercontact1mobileno");
	         String usercontact2emailaddress=(String)inputparameters.get("usercontact1emailaddress");
	         String usercontact2name=(String)inputparameters.get("usercontact2name");
	         String usercontact3mobileno=(String)inputparameters.get("usercontact1mobileno");
	         String usercontact3emailaddress=(String)inputparameters.get("usercontact1emailaddress");
	         String usercontact3name=(String)inputparameters.get("usercontact3name");
	         if((NumberUtils.isNumber(mobilenumber)==true) && (NumberUtils.isNumber(HomelocationLatitude)==true) && (NumberUtils.isNumber(HomelocationLongitude)==true)){
	        	 //int imobilenumber = Integer.parseInt(mobilenumber);
	        	 //double dHomelocationLatitude=Double.parseDouble(HomelocationLatitude);
	        	 //double dHomelocationLongitude=Double.parseDouble(HomelocationLongitude);
	        	 //boolean consenttonotification=false;
	        	 
	        	 //if(Consenttonotification.equals("Yes")) {
	        	//	 consenttonotification=true;
	        	 //}

	 			CloudantClient client = ClientBuilder.url(new URL("https://c113358f-f5d0-4fa1-a2de-a49e02fb4652-bluemix.cloudantnosqldb.appdomain.cloud"))
	 					.iamApiKey("EoS9h6YsUtRDxw1ydY9kNfOtr_ioUj2xBHLFsFTKzcdB")
	 					.build();
	 			Database db = client.database("userdetails", false);
	 			String json="{\n" + 
	 					"  \"firstname\": \"" +firstname +  "\",\n" + 
	 					"  \"lastname\": \"" +lname + "\",\n" + 
	 					"  \"emailaddress\": \""+emailaddress  +"\",\n" + 
	 					"  \"noofpeoplefamily\": \"" +  noofpeoplefamily +"\",\n" + 
	 					"  \"mobilenumber\": \"" + mobilenumber  +"\",\n" + 
	 					"  \"Loginpassword\": \"" +Loginpassword +   "\",\n" + 
	 					"  \"HomelocationLatitude\": \"" +HomelocationLatitude  +  "\",\n" + 
	 					"  \"HomelocationLongitude\": \"" + HomelocationLongitude +"\",\n" + 
	 					"  \"Residentialaddress\": \"" + Residentialaddress + "\",\n" + 
	 					"  \"Officeaddress\": \"" +  Officeaddress  +"\",\n" + 
	 					"  \"Consenttonotification\": \"" +  sConsenttonotification +"\"\n" + 
	 					"}";
	 			String JSONString = new String (json);              
	 			JsonParser parser = new JsonParser();
	 			JsonObject data = (JsonObject)parser.parse(JSONString);              
	 			db.save(data);
	 				 			CloudantClient client1 = ClientBuilder.url(new URL("https://c113358f-f5d0-4fa1-a2de-a49e02fb4652-bluemix.cloudantnosqldb.appdomain.cloud"))
	 					.iamApiKey("EoS9h6YsUtRDxw1ydY9kNfOtr_ioUj2xBHLFsFTKzcdB")
	 					.build();
	 			Database db1 = client.database("usercontactdetails", false);
	 			String json1="{\n" + 
	 					"  \"useremailaddress\": \"" +emailaddress +  "\",\n" +
	 					"  \"usercontact1name\": \"" +usercontact1name +  "\",\n" + 
	 					"  \"usercontact1mobileno\": \"" +usercontact1mobileno + "\",\n" + 
	 					"  \"usercontact1emailaddress\": \""+usercontact1emailaddress  +"\",\n" + 
	 					"  \"usercontact2name\": \"" +  usercontact2name +"\",\n" + 
	 					"  \"usercontact2mobileno\": \"" + usercontact2mobileno  +"\",\n" + 
	 					"  \"usercontact2emailaddress\": \"" +usercontact2emailaddress +   "\",\n" + 
	 					"  \"usercontact3name\": \"" +usercontact3name  +  "\",\n" + 
	 					"  \"usercontact3mobileno\": \"" + usercontact3mobileno +"\",\n" + 
	 					"  \"usercontact3emailaddress\": \"" + usercontact3emailaddress + "\"\n" + 
	 					"}";
	 			String JSONString1 = new String (json1);              
	 			JsonParser parser1 = new JsonParser();
	 			JsonObject data1 = (JsonObject)parser.parse(JSONString1);              
	 			db1.save(data1);
	 			
	        	 /*
	        	 //Class.forName("org.postgresql.Driver");
		         c = DriverManager
		            .getConnection("jdbc:postgresql://localhost:5432/DisasterSOSDB",
		            "postgres", "admin");
		         //c.setAutoCommit(false);
		         System.out.println("Opened database successfully");
		         String sql = "INSERT INTO public.\"Userdetails\"(\n" + 
			         		"	\"FirstName\", \"LastName\", \"EmailAddress\", \"Family-people\", \"MobileNumber\", \"Loginpassword\", \"HomelocationLatitude\", \"HomelocationLogitude\", \"Residentialaddress\", \"Officeaddress\", \"Consenttonotification\")\n" + 
			         		"	VALUES ('" +firstname + "', '" + lname + "', '" + emailaddress + "','" + noofpeoplefamily +"'," + imobilenumber +", '"+Loginpassword +"',"+ dHomelocationLatitude +  "," + dHomelocationLongitude+ " , '" + Residentialaddress + "', '"+Officeaddress + "',"+ consenttonotification+ ");";	
		         PreparedStatement prepareStatement = c.prepareStatement(sql);
		         prepareStatement.executeUpdate();
		         /*
		         ResultSet rs = stmt.executeQuery( sql );
		         stmt.executeUpdate(sql);
		         stmt.close();
		         c.commit();
		         c.close();	
		         rs.close();
		         stmt.close();
		         c.close();
		         
		         c.close();
		         */
		         list.add("\"Message\":\"Registered user successfully added\"" );
		         System.out.println("Registration done successfully");
	         }else {
	        	 list.add("Invalid input for number fields" );
	         }
	         
	      } catch ( Exception e ) {
	         System.err.println( e.getClass().getName()+": "+ e.getMessage() );
	         list.add("\"Message\":\"Exception in database - "+ e.getMessage()+"\"" );
	         String lists=list.toString();
		      lists=lists.replace("[", "");
		      lists=lists.replace("]", "");
		      finalmessage="{" + lists + "}";
	      }
	     


      
        //return a simple list of strings
	      String lists=list.toString();
	      lists=lists.replace("[", "");
	      lists=lists.replace("]", "");
	      finalmessage="{" + lists + "}";
        return new ResponseEntity<String>(finalmessage, HttpStatus.OK);
    }

	
}