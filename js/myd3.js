var treeData = [
  {
    "name": "Saimir Kociu's Experience",
    "children": [
        {
            "name": "Federal Home Loan Bank of Chicago",
            "children" : [
			{
                "name": "Lead Quality Assurance Analyst",
                "children" :
                [{
                  "name": "February 2022 - present"
                }]
             },
			 {
                "name": "Senior Quality Assurance Analyst",
                "children" :
                [{
                  "name": "July 2016 - February 2022"
                }]
             },
			  ]
        },
        {
            "name": "BMO Harris Bank",
            "children" : 
              [{
                "name": "AML Modeling Governance Lead",
                "children" :
                [{
                  "name": "February 2015 - April 2016",
                  
                }]
              }]
        },
        {
            "name": "JPMorgan Chase Bank",       
            "children" : [
              {
                "name": "Software Quality Assurance Analyst/Lead", 
                "children" :
                [{
                  "name": "July 2006 - September 2014"
                }]
              },
              {
                "name": "Fixed-Income Analyst",
                "children" :
                [{
                  "name": "June 2005 - July 2006"
                }]
              },
              {
                "name": "Operations & Quality Specialist",   
                "children" :
                [{
                  "name": "October 2003 - June 2005"
                }]
              }
            ]
        },

    ]
}];




var width = 1200;
var height = 500;

var i = 0;

var tree = d3.layout.tree()
.size([height, width-100]);

var diagonal = d3.svg.diagonal()
.projection(function(d) { return [d.y, d.x]; });

var svg = d3.select("#myviz").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(20,0)");

root = treeData[0];

update(root);

function update(source) {

    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
        links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 300; });

    // Declare the node
    var node = svg.selectAll("g.node")
        .data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter the nodes.
    var nodeEnter = node.enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { 
        return "translate(" + d.y + "," + d.x + ")"; });

    nodeEnter.append("circle")
        .attr("r",7)
        .style("fill", "#ccc");

    nodeEnter.append("text")
        .attr("x", "0")
        .attr("dy", "-1em")
        .attr("text-anchor", "start")
        .text(function(d) { return d.name;})
        .style("fill-opacity", 10);

    // Declare the links
    var link = svg.selectAll("path.link")
        .data(links, function(d) { return d.target.id; });

    // Enter the links.
    link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", diagonal)
        .attr("stroke", "#838b8b")
        .attr("stroke-width", "10px")
        

}