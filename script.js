/*
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem {
        constructor(id, name, description, categoryGenre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }
    
        updateContentItem(id, name, description, categoryGenre) {
            if (this.id === id) {
                if (name) this.name = name;
                if (description) this.description = description;
                if (categoryGenre) this.categoryGenre = categoryGenre;
            }
        }
    
        toString() {
            return `
            <div class="content-item-wrapper" id="content-item-${this.id}">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.categoryGenre}</div>
            </div>
            `;
        }
    }
    const contentItems = [
        new ContentItem(1, 'Ferrari 488 Pista', 'Italian sports car', 'Sports Car'),
        new ContentItem(2, 'McLaren Senna', 'British sports car', 'Sports Car'),
        new ContentItem(3, 'Porsche 911 GT3 RS', 'German sports car', 'Sports Car'),
        new ContentItem(4, 'Aston Martin Valkyrie', 'British sports car', 'Sports Car'),
        new ContentItem(5, 'Lamborghini Aventador SVJ', 'Italian sports car', 'Sports Car')
    ];

    $(document).ready(function() {
        contentItems.forEach(item => {
            $('#content-item-list').append(item.toString());
        });
    
        $('.content-item-wrapper').css({
            'border': '1px solid black',
            'width': '70%',
            'padding': '20px',
            'margin': '20px auto'
        });
    });
    $('#successUpdateBtn').click(function() {
        contentItems[0].updateContentItem(1, 'Audi', 'Indian sports car', 'Luxry Car');
        $('#content-item-list').empty();
        contentItems.forEach(item => {
            $('#content-item-list').append(item.toString());
        });
        $('.content-item-wrapper').css({
            'border': '1px solid black',
            'width': '70%',
            'padding': '20px',
            'margin': '20px auto'
        });
    });
    $('#failureUpdateBtn').click(function() {
         alert("Unsuccessful")
    });
});


