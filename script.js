// Fonction pour gérer le formulaire de soumission d'article
document.getElementById('sellForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemPhotos = document.getElementById('itemPhotos').files;
    console.log(`Nom: ${itemName}, Prix: ${itemPrice}, Photos:`, itemPhotos);
    alert('Votre article a été soumis pour validation.');
});
