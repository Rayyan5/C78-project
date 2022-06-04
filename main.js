var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/6pgY7KxH/dad.webp", "https://i.postimg.cc/QM7S1zXj/mom.webp", "https://i.postimg.cc/GpsrYb89/Sister.webp", "https://i.postimg.cc/rF88b6bY/big-brother.webp", "https://i.postimg.cc/TwMxJBg0/boy.webp", "https://i.postimg.cc/QdCj8QjQ/dsfae.webp", "https://i.postimg.cc/KvJZhqhc/Simba.jpg", "https://i.postimg.cc/jS1tLDjG/Milo.jpg"];
var names = ["Family Book","Muheet Khan", "Sadaf Khan", "Alishba Khan", "Ayaan Khan", "Rayyan Khan", "Nabhaan Khan", "Simba", "Milo"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 8
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
