# SEMANTIC HTML
+ Semantic HTML introduces meaning to a page through specific elements that provide context as to what is in between the tags.
+ Semantic HTML is a modern standard and makes a website accessible for people who use screen readers to translate the webpage and improves your website’s SEO.
+ ```<header>```, ```<nav>``` , ```<main>``` and ```<footer>``` create the basic structure of the webpage.
+ ```<section>``` defines elements in a document, such as chapters, headings, or any other area of the document with the same theme.
+ ```<article>``` holds content that makes sense on its own such as articles, blogs, comments, etc.
+ ```<aside>``` contains information that is related to the main content, but not required in order to understand the dominant information.
+ ```<figure>``` encapsulates all types of media.
+ ```<figcaption>``` is used to describe the media in ```<figure>```.
+ ```<video>```, ```<embed>```, and ```<audio>``` elements are used for media files.
+ ```<time></time>```  
  + (Example: *&lt;p&gt; By Peter Ghostine. Published &lt;time datetime='2017-1-3'&gt;January 3rd &lt;/time&gt;*)
+ ```<em>``` (emphasized text)
+ ```<strong>``` (important text)
+ ```<mark>``` (marked/highlighted text)
+ ```<cite>``` (the title of a work)
+ ```<dfn>``` (a definition term)```
+ ```<form></form>```
+ ```<legend></legend>```
+ ```<fieldset>>/fieldset>```    

```
   <form>
     <fieldset>
       <legend>T-Shirt size</legend>
       <input type="radio" id="s" name="shirtsize" />
       <label for="s">S</label>  
       <input type="radio" id="m" name="shirtsize" />
       <label for="m">M</label>  
       <input type="radio" id="l" name="shirtsize" />
       <label for="l">L</label>   
     </fieldset>
   </form>
```

# OTHER USEFUL STUFF
Using ```<i>``` to denote a mode or voice change.  
```
Example:
<p>;There is a certain <i lang="fr" class="idiomatic">je ne sais quoi</i>in the air.</p>
```
# TABLES
```
<table></table>   
<thead></thead>   
<tfoot></tfoot>   
<tbody></tbody>   
<th></th>
<tr></tr>   
<td></td>   
<table></table>   
<thead></thead>
<tfoot></tfoot> 

<tbody></tbody>, <th></th>, <tr></tr>, <td></td>
```
# CSS
*Example 1:*
```
<p style='color: red;'>I'm learning to code!</p>
<p style='color: red; font-size: 20px;'>I'm learning to code!</p>
```
*Example 2:*
```
{
  border: 1px solid red;
}

p {
  color: green;
}

h1 {
  color: maroon;
}

.title {
  color: teal;
}

.uppercase {
  text-transform: uppercase;
}

#article-title {
  font-family: cursive;
}

a[href*='florence'] {
  color: lightgreen;
}

a:hover {
  color:darkorange;
}

h2.destination {
  font-family: Tahoma;
}

li h4 {
  font-family: Garamond;
}
```
*Example 3:*
```
body {
  /* Old browsers */
  background: #141E30;
  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(-45deg, #35577D, #141E30);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(-45deg, #35577D, #141E30);
  margin: 0;
  padding: 0;
}

h1 {
  color: #FFF;
  font-family: Georgia;
  font-size: 2em;
  padding-top: 100px;
  width: 100%;
}

h2 {
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.5);
  font-family: Georgia;
  font-weight: 100;
  font-size: 22px;
  line-height: 24px;
  padding-bottom: 30px;
  text-align: left;
  width: 70%;
}

p {
  color: aliceblue;
  font-family: Helvetica;
  line-height: 1.3em;
  text-align: left;
  width: 100%;
}

.byline {
  font-family: Helvetica;
  color: rgba(255, 255, 255, 0.5);
  float: left;
  font-size: 14px;
  padding-left: 10px;
  text-transform: uppercase;
}

.caption {
  display: block;
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  font-style: italic;
  line-height: 14px;
  margin-left: 20px;
  padding: 10px;
  position: relative;
  top: 80%;
  width: 60%;
}

.content {
  padding: 40px;
}

.image {
  background-image: url("https://content.codecademy.com/courses/web-101/unit-4/htmlcss1-img_soccer.jpeg");
  background-size: cover;
  background-position: center;
  height: 300px;
}

.writer-img {
  -webkit-box-shadow: 5px 0px 5px 0px rgba(0, 0, 50, 0.97);
  -moz-box-shadow: 5px 0px 5px 0px rgba(0, 0, 50, 0.97);
  box-shadow: 5px 0px 5px 0px rgba(0, 0, 50, 0.97);
  float: left;
  width: 50px;
}
```
## Specificity
To make styles easy to edit, it’s best to style with a type selector, if possible. If not, add a class selector. If that is not specific enough, then consider using an ID selector.




