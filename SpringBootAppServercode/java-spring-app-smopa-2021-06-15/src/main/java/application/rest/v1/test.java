package application.rest.v1;

import java.net.MalformedURLException;
import java.net.URL;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

import com.cloudant.client.api.ClientBuilder;
import com.cloudant.client.api.CloudantClient;
import com.cloudant.client.api.Database;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;


public class test {

	public static void main(String[] args) {
		try {
			


			CloudantClient client = ClientBuilder.url(new URL("https://c113358f-f5d0-4fa1-a2de-a49e02fb4652-bluemix.cloudantnosqldb.appdomain.cloud"))
					.iamApiKey("EoS9h6YsUtRDxw1ydY9kNfOtr_ioUj2xBHLFsFTKzcdB")
					.build();
			Database db = client.database("userdetails", false);
			String JSONString = new String ("{ \"hot\": { \"season\": \"summer\", \"weather\": \"usually warm and sunny\" }, \"cold\": { \"season\": \"winter\", \"weather\": \"usually cold and snowy\" }, \"sneezy\": { \"season\": \"spring\", \"weather\": \"cool with rain and sun\" },\"colorful\": {\"season\": \"autumn\",\"weather\": \"breezes\"} }");              
			JsonParser parser = new JsonParser();
			JsonObject data = (JsonObject)parser.parse(JSONString);              
			db.save(data);
			
			System.out.println("You have inserted the document");
		} catch (MalformedURLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		         
		
	}
	// A Java type that can be serialized to JSON
	public class ExampleDocument {
	  private String _id = "example_id";
	  private String _rev = null;
	  private boolean isExample;

	  //public ExampleDocument(boolean isExample) {
	   // this.isExample = isExample;
	  //}

	  public String toString() {
	    return "{ id: " + _id + ",\nrev: " + _rev + ",\nisExample: " + isExample + "\n}";
	  }
	}


}
