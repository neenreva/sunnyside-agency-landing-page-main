### This is a solution to the [Frontend Mentor](https://www.frontendmentor.io/home) challenge:

# Sunnyside agency landing page

### Welcome! 👋 Here's a quick look:

![My solution](./design/FrontendMentorSunnysideagency%20landingpage.png)

[Live Link](https://neenreva.github.io/sunnyside-agency-landing-page-main/) [Solution Home](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef/hub/sunnyside-agency-landing-page-Rb9Mhsibh)

## The challenge

Your challenge is to build out this landing page and get it looking as close to the design as possible.

This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle. But you could also choose to do this without JS!

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Still learning the little quirks to dynanically switching image sources. And surprised how complicated it can get.

HTML with the srcset attribute: 

```
<img class="bg-img" 
  id="landing-bg-img" 
  src="images/mobile/image-header.jpg" 
  srcset="images/mobile/image-header.jpg 888w, 
          images/desktop/image-header.jpg" 
  alt="Background imgage" />
```

This is the way to go for accessibily. My gripe here is that you're ending up declaring twice (HTML & CSS) your 'breakpoints.' I'm guessing that in most cases there will be a few different breakpoints but it just seems like most format decisions are made in CSS and that changing the src url should be the standard. Tell me why that's not the case? To futher imphasize this, adding complexity like a grid format may lend itself to additional use of the size attribute. When doing that it formally ends up being written just like a media query in CSS.



CSS declaring the src: 

```
<img class="bg-img" id="landing-bg-img" src="" alt="Background imgage" />
```

Again already likely a part of your CSS.

```
#landing-bg-img {
  content: url(../images/mobile/image-header.jpg);
}

@media (min-width: 888px) {
  #landing-bg-img {
    content: url(../images/desktop/image-header.jpg);
  }
}
```

To me just the most common sense approach.

### Continued development

I used the term gripe cause this could vary a lot in use cases and further in using the picture element correctly as well.

```
<picture class="landing__bg-img">
  <source srcset="images/mobile/image-header.jpg">
  <source media="(min-width: 888px)"
    srcset="images/desktop/image-header.jpg">
  <img class="bg-img" id="landing-bg-img" src="" alt="Background imgage" />
</picture>
```

For now i'll leave this mess and maybe revisit when I understand this on a deeper level.

### Useful resources

- [Pixel Perfect](https://www.welldonecode.com/perfectpixel/) - Overlay that really helps with the sizing of the elements.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

### As always feedback is welcome! Thanks for checking this out.
