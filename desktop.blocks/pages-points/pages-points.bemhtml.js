block('pages-points')(
    content()(function(){
        var count_point=this.ctx.count_point;
        var page=this.ctx.page;
        var max_count_points=this.ctx.max_count_points;
        function generatePoints(N){
            var items=[];
            for(var i=0;i<N;i++){
                items.push({
                    block: 'point-number',
                    content: {
                        block: 'image',
                        url: 'http://lorempixel.com/50/50',
                        title: 'point1',
                        alt: 'point1'
                    }
                });
            };
            return items;
        }
        function pagination(items,page,count){
            var elements=[];
            for(var i=0;i<items.length;i++){
                if(i>=(page-1)*count&&i<page*count){
                    elements.push(items[i]);
                }
            }
            return elements;
        }
        return pagination(generatePoints(count_point),page,max_count_points);
    })
);
