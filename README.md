# Digital Marketplace Maintenance Page

The code in here was used to create our [maintenance page](https://github.com/alphagov/digitalmarketplace-aws/blob/master/playbooks/roles/nginx/files/maintenance.html). More generally, it is helpful for creating static pages for the Digital Marketplace.

### What it does specifically

There are some manual steps and some automated steps in creating our static maintenance page. At the time of writing this has been used for exactly one page, so I didn't try too hard to automate stuff.

In order:

- Manually copy + paste (and linted) the HTML for our 404 page
- Manually added in our compiled CSS files generated from [the buyer frontend app](https://github.com/alphagov/digitalmarketplace-buyer-frontend)
  - specifically, `govuk-template.css` and `application.css`
  - copied in the IE8 versions each of these files as well
- Manually added our compiled `ie8.js` file generated from [the buyer frontend app](https://github.com/alphagov/digitalmarketplace-buyer-frontend)
  - without this file, HTML5 elements break in IE8
- Add some gulp tasks to process our large CSS files
  - Basically combining similar rules and then removing unneeded ones
  - [More detail in this commit](https://github.com/alphagov/digitalmarketplace-maintenance/commit/f8f70797b1ab15e9ff953a3742ef624ed6cdfd03)
- Make manual changes to HTML
  - Pointing at gov.uk for our asset links and removing links that point at the Digital Marketplace
  - [More detail in this commit](https://github.com/alphagov/digitalmarketplace-maintenance/commit/fda1aee8f6a37b53956e7a65cc5f5c78ed3b6800)
- Updating the content
- Adding default tracking
    - Spoke to Ash Chohan about what he wanted on this page and he gave me this


# Running it

1. Clone the repo
2. Run `npm install`
3. Run `gulp` to generate the new CSS files
4. Run `gulp bs` to host the page at [http://localhost:3000/maintenance.html](http://localhost:3000/maintenance.html)
