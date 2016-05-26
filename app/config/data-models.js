(function(){
    
    angular.module('teams')
        .service('Models', function(DS){
            var ms = this;
            
            ms.Sport = DS.defineResource({
                name: 'sport',
                endpoint: 'sports',
                relationships: {
                    hasMany: {
                        league: {
                            localField: 'leagues',
                            foreignKey: 'sportId'
                        }
                    },
                   
                }
            })
            
            ms.League = DS.defineResource({
                name: 'league',
                endpoint: 'leagues',  
                relationships: {
                    belongsTo: {
                        sport: {
                            localField: 'sport',
                            localKey: 'sportId'
                        }
                    }
                }
            })
            
            ms.Team = DS.defineResource({
                name: 'team',
                endpoint: 'teams',  
                relationships: {
                    belongsTo: {
                        sport: {
                            localField: 'league',
                            localKey: 'sportId'
                        }
                    }
                }
            })
            
            ms.Player = DS.defineResource({
                name: 'player',
                endpoint: 'players',  
                relationships: {
                    belongsTo: {
                        sport: {
                            localField: 'team',
                            localKey: 'sportId'
                        }
                    }
                }
            })
            
            
            
            
            
        })
    
}())