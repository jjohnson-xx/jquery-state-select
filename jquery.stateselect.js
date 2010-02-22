/*
 * Simple State/Province Select plugin for jQuery
 * 
 * Example:
 * $(document).ready(function() {
 *    $('#country').linkToStates('#state');
 *  });
 *
 * Copyright (c) 2008 Adam Daniels
 * Licensed under the MIT License
 *
 */
;(function($) {
    var canadian_provinces = {
        'AB' : 'Alberta',
        'BC' : 'British Columbia',
        'MB' : 'Manitoba',
        'NB' : 'New Brunswick',
        'NL' : 'New Foundland and Labrador',
        'NT' : 'Northwest Territories',
        'NS' : 'Nova Scotia',
        'NU' : 'Nunavut',
        'ON' : 'Ontario',
        'PE' : 'Prince Edward Island',
        'QC' : 'Quebec',
        'SK' : 'Saskatchewan',
        'YT' : 'Yukon'
    }
    var us_states = {
	'AL' : 'Alabama',
        'AK' : 'Alaska',
        'AS' : 'American Samoa',
        'AZ' : 'Arizona',
        'AR' : 'Arkansas',
        'CA' : 'California',
        'CO' : 'Colorado',
        'CT' : 'Connecticut',
        'DE' : 'Delaware',
        'DC' : 'District Of Columbia',
        'FM' : 'Federated States of Micronesia',
        'FL' : 'Florida',
        'GA' : 'Georgia',
        'GU' : 'Guam',
        'HI' : 'Hawaii',
        'ID' : 'Idaho',
        'IL' : 'Illinois',
        'IN' : 'Indiana',
        'IA' : 'Iowa',
        'KS' : 'Kansas',
        'KY' : 'Kentucky',
        'LA' : 'Louisiana',
        'ME' : 'Maine',
        'MH' : 'Marshall Islands',
        'MD' : 'Maryland',
        'MA' : 'Massachusetts',
        'MI' : 'Michigan',
        'MN' : 'Minnesota',
        'MS' : 'Mississippi',
        'MO' : 'Missouri',
        'MT' : 'Montana',
        'NE' : 'Nebraska',
        'NV' : 'Nevada',
        'NH' : 'New Hampshire',
        'NJ' : 'New Jersey',
        'NM' : 'New Mexico',
        'NY' : 'New York',
        'NC' : 'North Carolina',
        'ND' : 'North Dakota',
        'MP' : 'Northern Mariana Islands',
        'OH' : 'Ohio',
        'OK' : 'Oklahoma',
        'OR' : 'Oregon',
        'PW' : 'Palau',
        'PA' : 'Pennsylvania',
        'PR' : 'Puerto Rico',
        'RI' : 'Rhode Island',
        'SC' : 'South Carolina',
        'SD' : 'South Dakota',
        'TN' : 'Tennessee',
        'TX' : 'Texas',
        'UT' : 'Utah',
        'VT' : 'Vermont',
        'VA' : 'Virginia',
        'VI' : 'Virgin Islands'
        'WA' : 'Washington',
        'WV' : 'West Virginia',
        'WI' : 'Wisconsin',
        'WY' : 'Wyoming'
    }
  
    $.fn.extend({
        linkToStates: function(state_select_id) {
            $(this).change(function() {
                var country = $(this).attr('value');
                $(state_select_id).removeOption(/.*/);
                switch (country) {
                    case 'Canada':
                        $(state_select_id).addOption(canadian_provinces, false);
                        break;
                    case 'United States':
                        $(state_select_id).addOption(us_states, false);
                        break;
                    default:
                        $(state_select_id).addOption({ '' : 'Please select a Country'}, false);
                        break;
                }
            });
        }
    });
})(jQuery);