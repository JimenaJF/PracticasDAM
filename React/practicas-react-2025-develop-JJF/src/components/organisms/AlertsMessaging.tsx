import AlertsMessagingMolecules from "../molecules/AlertsMessagingMolecules";

export default function AlertsMessaging({ text }: { text: string }) {
  return (
    <section>
      <AlertsMessagingMolecules text={text} />
    </section>
  );
}