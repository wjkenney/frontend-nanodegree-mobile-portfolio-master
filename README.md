## Website Performance Optimization portfolio project


Please have fun checking out these website optimisation.  I am hosting the Cameron website [here](http://wjkenney.github.io/frontend-nanodegree-mobile-portfolio-master/index.html)

Here is a list of some of the optimizations I have included: 

  * Added async tags to all non-dom manipulating scripts
  * Separated non essential css into a separate stylesheet with a media print tag)
  * Reduced image file size
  * Minifyd http css and javascript and inlining everything into one file. 

Here is a list of optimizations the pizza website: 
  * Rewrote unnecessary and repetitive function calls from loops: example: document.querySelector("#pizzaSize").innerHTML) and changed querySelector to getElementbyID because it is faster.  
  * Reduced the usage of layout inducing methods like scrollTop and Offsetwidth. They are only called when necessary.
  * Used transform property for animation instead of width.  Supposedly it is better. 


 I also changed the structure of the rendering to rely on a movingpizza class to produce the icons.  Not sure if this did anything useful for the website.

# Contribution
Please feel free to offer suggestiions how to make it better!  (I know it is not perfect).  

# license

This work is licensed under a Creative Commons Attribution 3.0 License.
This means you can use the dump as long as you give credit to William Kenney (a link on your website to www.wjkenney.org is ok)
see http://creativecommons.org/licenses/by/3.0/
UK: Contains Royal Mail data Royal Mail copyright and database right 2010.
The Data is provided "as is" without warranty or any representation of accuracy, timeliness or completeness.

