using System;
using System.Reflection;

namespace AngularRouting.Areas.HelpPage.ModelDescriptions {
    public interface IModelDocumentationProvider {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}