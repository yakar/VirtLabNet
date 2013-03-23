/**
*   Author: Aydin YAKAR
*   Project: jQuery Controls
*   Version: v0.1
*   LastMod: 22.03.2013 / 22:21
*
*************************/

			$(document).ready(function(){

				$('#calistir').click(function(){
					if($('#node_name option:selected').val() == '')
					{
						$('#komut').addClass('alert-error');
						$('#komut_mesaji').html('Cihaz seçmelisiniz!');
					}
					else if($('#command option:selected').val() == '')
					{
						$('#komut').addClass('alert-error');
						$('#komut_mesaji').html('İşlem seçmelisiniz!');
					}
					else
					{
						$('#komut').removeClass('alert-error').addClass('alert-success');
						$('#komut_mesaji').html( $('#node_name option:selected').val() + ' is ' + $('#command option:selected').val() );
						//$('#vln_form').submit();
					}

				});

			});
