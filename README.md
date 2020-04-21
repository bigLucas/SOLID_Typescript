**Exercises done by Rodrigo Branas, in a live on Youtube**
# SOLID
- Sigle responsibility: the class must have a single reason for the change.
- Open-closed: open to extension and closed to modification.
- Liskov substitution: If S is a subclass of T, S can be replaced by any subclass derived from T, without broken the implementation or business logic.
- Interface segregation: Specialized interfaces are better than a single general interface
- Dependency inversion: Depend on abstractions and not on complete implementations (when there are many services, it is worth having an abstract service), example: with several payment gateways, it is necessary to create a PaymentsGateway interface and implement this interface with other classes that will be more specific to each payment service.