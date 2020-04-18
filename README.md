# SOLID
- Sigle responsibility: a classe deve ter um unico motivo para mudar
- Open-closed: aberto para extensão e fechado para modificação
- Liskov substitution: Se S é subclasse de T, S pode ser substituido por qualquer subclasse que derive de T, sem quebrar a implementação ou logica de negócio.
- Interface segregation: Interfaces especializadas são melhores do que uma unica interface geral
- Dependency inversion: Dependa de abstrações e não de implementações completas (quando existirem muitos serviços, vale a pena ter um serviço abstrato), exemplo: com multiplos gateways de pagamento é necessario criar uma interface de PaymentsGateway e implementar essa interface com outras classes que serão mais especificas para cada serviço de pagamento.