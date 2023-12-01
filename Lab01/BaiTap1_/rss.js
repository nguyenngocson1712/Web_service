$(document).ready(function() {
    $('#rssForm').submit(function(event) {
        event.preventDefault();
        var rssUrl = $('#rssUrl').val();

        if (rssUrl) {
            var apiurl = 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(rssUrl);

            $.ajax({
                url: apiurl,
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    var items = data.items.slice(0, 5);
                    $('#rssResults').empty();

                    $.each(items, function(index, item) {
                        var title = item.title;
                        var description = item.description.substring(0, 20) + " ...";
                        var link = item.link;

                        var html = '<div>';
                        html += '<h2><a href="' + link + '">' + title + '</a></h2>';
                        html += '<p>' + description + '</p>';
                        html += '</div>';

                        $('#rssResults').append(html);
                    });
                },
                error: function() {
                    $('#rssResults').html('<p>Không thể tải tin tức từ RSS.</p>')
                }
            });
        }
    });
});