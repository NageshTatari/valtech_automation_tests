package stepDef;

import cucumber.api.java.Before;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Valtech_Tests {


        WebDriver driver;

        @Before
        public void startUp(){

            System.setProperty("webdriver.gecko.driver","lib/geckodriver.exe");
            driver = new FirefoxDriver();
        }


        @Given("^User in Valtech home page$")
        public void launchValtech() {

            driver.get("https://www.valtech.com");
        }


        @Then("^Latest News Section is displayed$")
        public void latestNews() {

            assert (driver.findElement(By.cssSelector("#container > div:nth-child(2) > div:nth-child(3)")).isDisplayed());

        }


        @When("^I am in (.*)$")
        public void pages(String pageName){

            if ("ABOUT".equals(pageName)) {

                driver.findElement(By.xpath("//span[text()='About']")).click();
            }

            if ("SERVICES".equals(pageName)) {

                driver.findElement(By.xpath("//span[text()='Services']")).click();
            }

            if ("WORK".equals(pageName)) {

                driver.findElement(By.xpath("//span[text()='Work']")).click();
            }

            if ("CONTACT".equals(pageName)){
                driver.findElement(By.xpath(".//*[@id='contacticon']/div/div/div[1]/i")).click();
            }


        }

        @Then("^I should see (.*) count$")
        public void offices(int offices) {
            Assert.assertTrue(driver.findElements(By.cssSelector(".contactcities>li")).size() == offices);
        }


        @Then("^H1 should be (.*)$")
        public void h1(String h1Text) {

            Assert.assertTrue(driver.findElement(By.xpath("//h1[text()='" + h1Text + "']")).isDisplayed());

        }

        @After
        public void tearDown() {
            driver.quit();
        }

    }
