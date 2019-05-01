import React from "react";
import Layout from "../components/layout";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import SEO from "../components/seo";
import seoJson from "../assets/seo.json";

export default () => (
    <Layout>
      <SEO title="Kyokushin Mas Oyama" description={seoJson["decription"]} keywords={seoJson["keywords"]}/>
      <div class="events">
        <Tabs defaultActiveKey="international" id="event-tab">
          <Tab eventKey="international" title="International">
              <table className="event-table">
                <tbody>
                  <tr>
                    <td>1/4~6</td>
                    <td>IKO Honbu Winter Camp &amp; Dan Test</td>
                    <td>Mitsumine, Japan</td>
                  </tr>
                  <tr>
                    <td>1/5~9</td>
                    <td>Romania Winter Camp</td>
                    <td>Sonaia, Romania</td>
                  </tr>
                  <tr>
                    <td>1/11~13</td>
                    <td>Czech Winter Camp Bila</td>
                    <td>Mezividi, Czech</td>
                  </tr>
                  <tr>
                    <td>1/11~13</td>
                    <td>Swiss Winter Camp</td>
                    <td>Lausanne, Switzerland</td>
                  </tr>
                  <tr>
                    <td>1/11~15</td>
                    <td>Russia Winter Camp</td>
                    <td>Moscow, Russia</td>
                  </tr>
                  <tr>
                    <td>1/27</td>
                    <td>US Weight Category Karate Championships</td>
                    <td>Los Angeles, USA</td>
                  </tr>
                  <tr>
                    <td>2/1~3</td>
                    <td>Turkey Winter Camp</td>
                    <td>Bursa, Turkey</td>
                  </tr> 
                  <tr>
                    <td>2/7~10</td>
                    <td>Bulgaria Winter Camp</td>
                    <td>Kranevo, Bulgaria</td>
                  </tr>
                  <tr>
                    <td>2/22~24</td>
                    <td>Russia Open Junior Cup</td>
                    <td>Moscow, Russia</td>
                  </tr> 
                  <tr>
                    <td>3/1~3</td>
                    <td>Polish Fighters Camp</td>
                    <td>Zakopane, Poland</td>
                  </tr>
                  <tr>
                    <td>3/2</td>
                    <td>Spanish Open Karate Championships</td>
                    <td>Badalona, Spain</td>
                  </tr>   
                  <tr>
                    <td>3/22~23</td>
                    <td>The 7th Balkan Championships</td>
                    <td>Volos, Greece</td>
                  </tr>
                  <tr>
                    <td>4/20~21</td>
                    <td>
                      International Karate Friendship                                     
                      The 36th All Japan Weight Category Karate Championships 
                      (International Goodwill Men's Weight Category Karate Championships) 
                      The Women's World Weight Category Karate Championships
                    </td>
                    <td>Tokyo, Japan</td>
                  </tr>   
                  <tr>
                    <td>4/22~23</td>
                    <td>International Training Camp</td>
                    <td>Mitsumine, Japan</td>
                  </tr>
                  <tr>
                    <td>4/23~26</td>
                    <td>Intensive Training &amp; Ichigeki Course</td>
                    <td>Tokyo, Japan</td>
                  </tr>    
                  <tr>
                    <td>5/18~19</td>
                    <td>European Weight Category Karate Championships</td>
                    <td>Wroclaw, Poland</td>
                  </tr>
                  <tr>
                    <td>6/7~9</td>
                    <td>Spain Summer Camp</td>
                    <td>Barcelona, Spain</td>
                  </tr> 
                  <tr>
                    <td>6/22</td>
                    <td>All American Open Karate Championships</td>
                    <td>New York, USA</td>
                  </tr>
                  <tr>
                    <td>6/29~7/3</td>
                    <td>Romania Summer Camp Eforie</td>
                    <td>Sud, Romania</td>
                  </tr>  
                  <tr>
                    <td>7/4~6</td>
                    <td>Greece Summer Camp</td>
                    <td>Skiathos, Greece</td>
                  </tr>
                  <tr>
                    <td>7/19~21</td>
                    <td>IKO Honbu Summer Camp</td>
                    <td>Yamanashi, Japan</td>
                  </tr>  
                  <tr>
                    <td>7/27</td>
                    <td>All Asia Weight Category Karate Championships</td>
                    <td>Shanghai, China</td>
                  </tr>
                  <tr>
                    <td>8/15~18</td>
                    <td>Poland Summer Camp</td>
                    <td>Lublin, Poland</td>
                  </tr>  
                  <tr>
                    <td>11/22~24</td>
                    <td>
                      The 12th World Open Karate Championships 
                      World Youth Karate Championships
                    </td>
                    <td>Tokyo, Japan</td>
                  </tr>
                  <tr>
                    <td>11/25~26</td>
                    <td>International Training Camp</td>
                    <td>Mitsumine, Japan</td>
                  </tr> 
                  <tr>
                    <td>11/26~29</td>
                    <td>Intensive Training &amp; Ichigeki Course</td>
                    <td>Tokyo, Japan</td>
                  </tr>
                  <tr>
                    <td>12/7</td>
                    <td>European Open Karate Championships</td>
                    <td>Minsk, Belarus</td>
                  </tr>  
                </tbody>
              </table>
          </Tab>
          <Tab eventKey="national" title="National">
            
          </Tab>
        </Tabs>
      </div>
    </Layout>
  )















{/* <div className="body-content">
        1/4~6 IKO Honbu Winter Camp &amp; Dan Test Mitsumine, Japan
        1/5~9 Romania Winter Camp Sonaia, Romania
        1/11~13 Czech Winter Camp Bila Mezividi, Czech
        1/11~13 Swiss Winter Camp Lausanne, Switzerland
        1/11~15 Russia Winter Camp Moscow, Russia
        1/27 US Weight Category Karate Championships Los Angeles, USA
        2/1~3 Turkey Winter Camp Bursa, Turkey
        2/7~10 Bulgaria Winter Camp Kranevo, Bulgaria
        2/22~24 Russia Open Junior Cup Moscow, Russia
        3/1~3 Polish Fighters Camp Zakopane, Poland
        3/2 Spanish Open Karate Championships Badalona, Spain
        3/22~23 The 7th Balkan Championships Volos, Greece
        4/20~21 International Karate Friendship                                     Tokyo, Japan
                The 36th All Japan Weight Category Karate Championships 
                (International Goodwill Men's Weight Category Karate Championships) 
                The Women's World Weight Category Karate Championships
        4/22~23 International Training Camp Mitsumine, Japan
        4/23~26 Intensive Training &amp; Ichigeki Course Tokyo, Japan
        5/18~19 European Weight Category Karate Championships Wroclaw, Poland
        6/7~9 Spain Summer Camp Barcelona, Spain
        6/22 All American Open Karate Championships New York, USA
        6/29~7/3 Romania Summer Camp Eforie Sud, Romania
        7/4~6 Greece Summer Camp Skiathos, Greece
        7/19~21 IKO Honbu Summer Camp Yamanashi, Japan
        7/27 All Asia Weight Category Karate Championships Shanghai, China
        8/15~18 Poland Summer Camp Lublin, Poland
        11/22~24 The 12th World Open Karate Championships Tokyo, Japan
                 World Youth Karate Championships
        11/25~26 International Training Camp Mitsumine, Japan
        11/26~29 Intensive Training &amp; Ichigeki Course Tokyo, Japan
        12/7 European Open Karate Championships Minsk, Belarus
      </div> */}