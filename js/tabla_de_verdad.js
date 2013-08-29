window.scope = {};

function tabla_de_verdad($scope)
{
	window.scope = $scope;
	$scope.binaries  = [];
	$scope.variables = [];
	$scope.objects   = [];

	$scope.evalua_expresion = function (expression) {

		//try
		//{
			//console.log(eval(expression));
			$scope.binaries = [];
			$scope.objects  = [];
			$scope.genera_tabla_de_verdad(expression);
		//} catch (err) {
		//	alert('Verifique su expresión por favor');
		/*	return false;
		}*/

	};

	$scope.genera_tabla_de_verdad = function(expression) {

		$scope.variables =_.uniq(expression.replace(/[^A-UW-Za-uw-z]/g, "").split("")).sort();
		number_of_variables = $scope.variables.length;

		for(var i = 0; i <= Math.pow(2 , number_of_variables)-1 ; i++)
		{
			var binary_number  = i.toString(2);

			var standar_binary = $scope.generate_standar_binary_number(binary_number , number_of_variables );
			$scope.binaries.push( standar_binary );

			var object = {};
			for(var j=0; j < number_of_variables; j++)
			{
				key	= $scope.variables[j];
				object[key] = standar_binary[j];

			}

			$scope.objects.push(object);
		}

	};

	$scope.generate_standar_binary_number = function ( binary, number_of_variables ) {
		//console.log(binary);
		if( binary.length < number_of_variables ) {
			return this.generate_standar_binary_number("0" + binary, number_of_variables);
		} else {
			return binary;
		}
	};

}












