  //instantiate leaflet map
   var map = L.map('map').setView([40.7282, -73.9442], 13);

  var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
    }).addTo(map);



   //Day 1.18 Allen St Marker
   L.marker([40.715391, -73.992094]).addTo(map).bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/01Bankny.jpg" alt="image"/></div><h1>Day 1</h1><h2>Graffiti Is A Crime</h2><h2>18 Allen St.</h2>', {minWidth : 200})
      // .openPopup();


   //Day 2.511 W 25th St Marker
   L.marker([40.749359, -74.004013]).addTo(map).bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/02Bankny.jpg" alt="image"/></div><h1>Day 2</h1><h2>This is My New York Accent</h2><h2>511 W 25th St.</h2>', {minWidth : 200})
       // .openPopup();

  //Day 3.100 W 24th St Marker
   L.marker([40.743811, -73.992559]).addTo(map).bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/03Bankny.jpg" alt="image"/></div><h1>Day 3</h1><h2>You Complete Me.</h2><h2>100 W 24th St.</h2>', {minWidth : 200})

  //Day 4. 5 Delancey St
   L.marker([40.720275, -73.993620]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/03Bankny.jpg" alt="image"/></div><h1>Day 4</h1><h2>Dirty Underwear the Musical</h2><h2>5 Delancey St.</h2>', {minWidth : 200})

  //Day 5. 208 Bushwick Ave
   L.marker([40.708873, -73.940096]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/04Bankny.jpg" alt="image"/></div><h1>Day 5</h1><h2><h1>Occupy! the Musical</h2><h2>5 Delancey St</h2>', {minWidth : 200})
       // .openPopup();

  // Day 6. Online


  //Day 7. 140 King St. Brooklyn
   L.marker([40.678733, -74.011841]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/07Bankny.jpg" alt="image"/></div><h1>Day 7</h1><h2>Heart Balloon</h2><h2>140 King St.</h2>', {minWidth : 200})

  //Day 8. 266 Freeman St. Brooklyn
   L.marker([40.734909, -73.950566]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/08Bankny.jpg" alt="image"/></div><h1>Day 8</h1><h2>Dead Philospher quote</h2><h2>266 Freeman St. Brooklyn, N.Y.</h2>', {minWidth : 200})

  //Day 9. 159 Ludlow St
   L.marker([40.721300, -73.988015]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/09Bankny.jpg" alt="image"/></div><h1>Day 9</h1><h2>Truck & Car installation</h2><h2>159 Ludlow St</h2>', {minWidth : 200})
       // .openPopup();

   //Day 10. 274 Bradford St. Brooklyn
   L.marker([40.672531, -73.892116]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/10Bankny.jpg" alt="image"/></div><h1>Day 10</h1><h2>East NY Beaver</h2><h2>274 Bradford St</h2>', {minWidth : 200})

  //Day 11. truck

  //Day 12. 10 E 7th St
   L.marker([40.728946, -73.990026]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/10Bankny.jpg" alt="image"/></div><h1>Day 12</h1><h2>Concrete confessional</h2><h2>10 E 7th Street</h2>', {minWidth : 200})

  //Day 13. Central Park

  //Day 14.69th Street and 28th Avenue (Queens)
   L.marker([40.747214, -73.896359]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/11Bankny.jpg" alt="image"/></div><h1>Day 14</h1><h2>What we do in life echoes in eternity</h2><h2>69th St</h2>', {minWidth : 200})


  //Day 15. 4 Staple St. Tribeca
   L.marker([40.718491, -74.009517]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/15Bankny.jpg" alt="image"/></div><h1>Day 15</h1><h2>9/11 Tribute</h2><h2>4 Staple St</h2>', {minWidth : 200})
       // .openPopup();

   //Day 16. Truck

   //Day 17. 40 Cook Street and Graham Avenue (Williamsburg)
   L.marker([40.702457, -73.942092]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/17Bankny.jpg" alt="image"/></div><h1>Day 17</h1><h2>Bed Stuy Geishas.</h2><h2>40 Cook St</h2>', {minWidth : 200})

  //Day 18. 506 W 24th St
   L.marker([40.748734, -74.004392]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/18Bankny.jpg" alt="image"/></div><h1>Day 18</h1><h2>Os Gemeos collab</h2><h2>506 W 24th St</h2>', {minWidth : 200})

  //Day 19. Truck

  //Day 20. 233 E 79th St
   L.marker([40.773825, -73.955763]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/20Bankny.jpg" alt="image"/></div><h1>Day 20</h1><h2>Hammer Boy</h2><h2>233 E 79th Street</h2>', {minWidth : 200})

   //Day 21. 465 E 153rd St
   L.marker([40.818865, -73.914945]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/21Bankny.jpg" alt="image"/></div><h1>Day 21</h1><h2>Ghetto 4 Life</h2><h2>465 E 153rd St</h2>', {minWidth : 200})

   //Day 22. 127th St & 35th Ave, Corona, NY 11368
   L.marker([40.759956, -73.842724]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/22Bankny.jpg" alt="image"/></div><h1>Day 22</h1><h2>No stone unturned (Queens Sphinx)</h2><h2>127th St & 35th Ave, Corona, NY</h2>', {minWidth : 200})

  //Day 23. online
  //Day 24. 641 W 51st St
   L.marker([40.767720, -73.995787]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/24Bankny.jpg" alt="image"/></div><h1>Day 23</h1><h2>Waiting in vain</h2><h2>641 W 51st St.</h2>', {minWidth : 200})

  //Day 25. E Houston St & Elizabeth St
   L.marker([40.724685, -73.993415]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/25Bankny.jpg" alt="image"/></div><h1>Day 25</h1><h2>Reaper</h2><h2>East Houston St & Elizabeth St</h2>', {minWidth : 200})

  //Day 26. 131 47th St
   L.marker([40.651909, -74.016338]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/26Bankny.jpg" alt="image"/></div><h1>Day 26</h1><h2>The Grumpier you are, the more Assholes you meet....</h2><h2>131 W47th St</h2>', {minWidth : 200})
       // .openPopup();

   //Day 27. West St & Noble St, Brooklyn, NY 11222
   L.marker([40.728554, -73.959015]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/27Bankny.jpg" alt="image"/></div><h1>Day 27</h1><h2>This site contains blocked messages</h2><h2>West St & Noble St, Brooklyn, NY</h2>', {minWidth : 200})

  //Day 28. Neptune Ave
   L.marker([40.579382, -73.982005]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/28Bankny.jpg" alt="image"/></div><h1>Day 28</h1><h2>Coney Island Robot</h2><h2>Neptune Ave</h2>', {minWidth : 200})

  //Day 29. 157 E 23rd St
   L.marker([40.739432, -73.983593]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/29Bankny.jpg" alt="image"/></div><h1>Day 29</h1><h2>The banality of evil.</br>157 E 23rd St</h2>', {minWidth : 200})

  //Day 30. 162nd Street and Jerome Avenue (Yankee Stadium)
   L.marker([40.821739, -73.900253]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/29Bankny.jpg" alt="image"/></div><h1>Day 30</h1><h2>Bronx Zoo Leopard</h2><h2>162nd Street and Jerome Avenue Bronx</h2>', {minWidth : 200})

  //Day 31. Borden Avenue and 35th Street
   L.marker([40.737069, -73.933018]).addTo(map)
       .bindPopup('<div><img style="width:100%" src="https://s3.amazonaws.com/maohungwdiproject2/31Bankny.jpg" alt="image"/></div><h1>Day 31</h1><h2>Inflatable Throw-Up</h2><h2>Borden Avenue and 35th St. Queens</h2>', {minWidth : 200})

  //
  // L.marker([]).addTo(map)
       //.bindPopup('.')
       // .openPopup();




