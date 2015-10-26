using System.Collections.ObjectModel;

namespace AngularRouting.Areas.HelpPage.ModelDescriptions {
    public class ComplexTypeModelDescription : ModelDescription {
        public ComplexTypeModelDescription() {
            Properties = new Collection<ParameterDescription>();
        }

        public Collection<ParameterDescription> Properties { get; private set; }
    }
}